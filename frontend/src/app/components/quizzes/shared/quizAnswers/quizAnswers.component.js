(function() {
  'use strict';
  var quizAnswers = {
      templateUrl: 'app/components/quizzes/shared/quizAnswers/quizAnswers.html',
      bindings: {
          answers: '=',
          onAnswered: '&'
      },
      controller: quizAnswersController,
      controllerAs: 'ctrl'
    };
    /** @ngInject */
    function quizAnswersController() {
      // var ctrl = this;
    }

  angular
  .module('frontend')
  .component('quizAnswers', quizAnswers);

})();

