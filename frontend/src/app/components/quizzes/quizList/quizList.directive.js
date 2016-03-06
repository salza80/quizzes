(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('quizList', quizList)

  /** @ngInject */
  function quizList(quiz) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/quizzes/quizList/quizList.html',
      scope: {
          items: '='
      },
      controller: QuizListController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function QuizListController() {
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
