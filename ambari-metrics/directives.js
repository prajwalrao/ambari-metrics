define([
  'angular',
],
function (angular) {
  'use strict';
  var module = angular.module('grafana.directives');

  module.directive('metricQueryEditorAmbarimetrics', function() {
    return {
      controller: 'AmbariMetricsQueryCtrl',
      templateUrl: 'app/plugins/datasource/ambari-metrics/partials/query.editor.html',
    };
  });

  module.directive('metricQueryOptionsAmbarimetrics', function() {
    return {templateUrl: 'app/plugins/datasource/ambari-metrics/partials/query.options.html'};
  });

});
