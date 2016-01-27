define([
  'angular',
],
function (angular) {
  'use strict';
  var module = angular.module('grafana.directives');

  module.directive('metricQueryEditorAms', function() {
    return {
      controller: 'AmsQueryCtrl',
      templateUrl: 'app/plugins/datasource/ams/partials/query.editor.html',
    };
  });

});
