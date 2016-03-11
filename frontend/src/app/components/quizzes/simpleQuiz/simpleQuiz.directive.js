(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('simpleQuiz', simpleQuiz)

  /** @ngInject */
  function simpleQuiz(quiz) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/quizzes/simpleQuiz/simpleQuiz.html',
      scope: {
          urlName: '&'
      },
      controller: simpleQuizController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function simpleQuizController() {
      var ctrl = this;
      ctrl.quiz = quiz.getQuiz(ctrl.urlName());
    }
  }
})();
