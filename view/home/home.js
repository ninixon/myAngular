(function(angular) {
  // 1.首页模块
  var app = angular.module('home', ['ngRoute'])
    // 2.路由规则
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider.when('/home', {
        templateUrl: './view/home/home.html',
        controller: 'homeController'
      }).when('/', {
        templateUrl: './view/home/home.html',
        controller: 'homeController'
      })
    }])
    // 3.创建控制器
  app.controller('homeController', ['$scope', function($scope) {
    //
  }])
})(angular)