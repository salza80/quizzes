(function() {
  'use strict';

  angular
    .module('frontend')
    .controller('QuizController', QuizController);

  /** @ngInject */
  function QuizController($routeParams) {
    var vm = this;
    vm.PageName = 'quiz';
    vm.QuizName = $routeParams.quizName;
  }
})();
