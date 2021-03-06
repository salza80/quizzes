(function() {
  'use strict';

  angular
    .module('frontend')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        resolve: {
          config: ['config', function(config) {
            return config.initConfig();
          }]
        }, 
        controller: 'MainController',
        controllerAs: 'main',
        redirectTo: function(current, path, search){
          if(search.goto){
            return "/" + search.goto;
          }
          else{
            return "/";
          }
        }
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        resolve: {
          config: ['config', function(config) {
            return config.initConfig();
          }]
        }, 
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/quiz/:quizName', {
        templateUrl: 'app/quiz/quiz.html',
        resolve: {
          config: ['config', function(config) {
            return config.initConfig();
          }]
        }, 
        controller: 'QuizController',
        controllerAs: 'quiz'
      })
      .when('/quiz/:quizName/result/:resultCode', {
        templateUrl: 'app/quiz/quiz.html',
        resolve: {
          config: ['config', function(config) {
            return config.initConfig();
          }]
        }, 
        controller: 'QuizController',
        controllerAs: 'quiz'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
  }

})();
