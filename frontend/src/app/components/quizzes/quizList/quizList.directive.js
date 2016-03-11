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
      controller: QuizListController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function QuizListController() {
      var ctrl = this;
      ctrl.quizzes = quiz.getList();
    }
  }

})();
