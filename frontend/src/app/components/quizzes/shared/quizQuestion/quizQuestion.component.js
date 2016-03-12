(function() {
  'use strict';
  var quizQuestion = {
      templateUrl: 'app/components/quizzes/shared/quizQuestion/quizQuestion.html',
      bindings: {
          question: '='
      },
      controller: quizQuestionController,
      controllerAs: 'ctrl'
    };
    /** @ngInject */
    function quizQuestionController() {
      // var ctrl = this; 
    }

  angular
  .module('frontend')
  .component('quizQuestion', quizQuestion)

})();

