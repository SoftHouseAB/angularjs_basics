
angular.module('frontend', [
  'ngRoute',
  'ngResource',
  'frontend.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/frontend/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
