(function() {
  'use strict';

  angular
    .module('frontend')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/:quizName', {
        templateUrl: 'app/quiz/quiz.html',
        controller: 'QuizController',
        controllerAs: 'quiz'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
