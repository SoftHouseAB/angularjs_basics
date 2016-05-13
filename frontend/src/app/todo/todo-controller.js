angular
  .module('frontend.todo')
  .controller('TodoCtrl', function ($scope, $resource, $window) {
    'use strict';
    $scope.todos = JSON.parse($window.localStorage.getItem('todos') || '[]');
    $scope.$watch('todos', function (newTodos, oldTodos) {
      if (newTodos !== oldTodos) {
        $window.localStorage.setItem('todos', JSON.stringify(angular.copy($scope.todos)));
      }
    }, true);

    $scope.add = function () {
      var todo = {label: $scope.label, isDone: false};
      $scope.todos.push(todo);
      $window.localStorage.setItem('todos', JSON.stringify(angular.copy($scope.todos)));
      $scope.label = '';
    };

    var helloWorld = $resource('http://localhost:8080/api/hello-world');
    $scope.greeting = helloWorld.get();

    $scope.check = function () {
      this.todo.isDone = !this.todo.isDone;
    };
  });
