(function() {
  'use strict';



  /** @ngInject */
  var quizList = {
    templateUrl: 'app/components/quizzes/quizList/quizList.html',
    controller: QuizListController,
    controllerAs: 'ctrl'
  };


    /** @ngInject */
  function QuizListController(quiz) {
    var ctrl = this;
    ctrl.quizzes = quiz.getList();
  }

  angular
  .module('frontend')
  .component('quizList', quizList)

})();
