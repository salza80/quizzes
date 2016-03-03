(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('quizzes', quizzes)

  /** @ngInject */
  function quizzes(quiz) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/quizzes/quizzes.html',
      scope: {
          items: '='
      },
      controller: QuizzesController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function QuizzesController() {
      var ctrl = this;
      ctrl.quizzes = quiz.getList();
      ctrl.newQuiz = quiz.getNew();
      ctrl.addQuiz = function(){
        quiz.addQuiz(ctrl.newQuiz)
        // ctrl.newQuiz = quiz.getNew();
      };

    }
  }

})();
