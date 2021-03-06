define([
      'angular',
      'lodash'
    ],
    function (angular, _) {
      'use strict';

      var module = angular.module('grafana.controllers');

      module.controller('AmbariMetricsQueryCtrl', function($scope) {

        $scope.init = function() {
          $scope.target.errors = validateTarget($scope.target);
          $scope.aggregators = ['avg', 'sum', 'min', 'max'];
          $scope.precisions = ['seconds', 'minutes', 'hours', 'days'];

          if (!$scope.target.aggregator) {
            $scope.target.aggregator = 'avg';
          }

          if (!$scope.target.downsampleAggregator) {
            $scope.target.downsampleAggregator = 'avg';
          }

          $scope.datasource.getAggregators().then(function(aggs) {
            $scope.aggregators = aggs;
          });
        };

        $scope.targetBlur = function() {
          $scope.target.errors = validateTarget($scope.target);

          // this does not work so good
          if (!_.isEqual($scope.oldTarget, $scope.target) && _.isEmpty($scope.target.errors)) {
            $scope.oldTarget = angular.copy($scope.target);
            $scope.get_data();
          }
        };

        $scope.getTextValues = function(metricFindResult) {
          return _.map(metricFindResult, function(value) { return value.text; });
        };

        $scope.suggestApps = function(query, callback) {
          $scope.datasource.suggestApps(query)
            .then($scope.getTextValues)
            .then(callback);
        };

        $scope.suggestHosts = function(query, callback) {
          $scope.datasource.suggestHosts(query)
            .then($scope.getTextValues)
            .then(callback);
        };

        $scope.suggestMetrics = function(query, callback) {
          $scope.datasource.suggestMetrics(query, $scope.target.app)
            .then($scope.getTextValues)
            .then(callback);
        };

        $scope.suggestTagKeys = function(query, callback) {
          $scope.datasource.metricFindQuery('tag_names(' + $scope.target.metric + ')')
              .then($scope.getTextValues)
              .then(callback);
        };

        $scope.suggestTagValues = function(query, callback) {
          $scope.datasource.metricFindQuery('tag_values(' + $scope.target.metric + ',' + $scope.target.currentTagKey + ')')
              .then($scope.getTextValues)
              .then(callback);
        };

        $scope.addTag = function() {
          if (!$scope.addTagMode) {
            $scope.addTagMode = true;
            return;
          }

          if (!$scope.target.tags) {
            $scope.target.tags = {};
          }

          $scope.target.errors = validateTarget($scope.target);

          if (!$scope.target.errors.tags) {
            $scope.target.tags[$scope.target.currentTagKey] = $scope.target.currentTagValue;
            $scope.target.currentTagKey = '';
            $scope.target.currentTagValue = '';
            $scope.targetBlur();
          }

          $scope.addTagMode = false;
        };

        $scope.removeTag = function(key) {
          delete $scope.target.tags[key];
          $scope.targetBlur();
        };

        function validateTarget(target) {
          var errs = {};

          if (target.tags && _.has(target.tags, target.currentTagKey)) {
            errs.tags = "Duplicate tag key '" + target.currentTagKey + "'.";
          }

          return errs;
        }

        $scope.init();
      });

    });