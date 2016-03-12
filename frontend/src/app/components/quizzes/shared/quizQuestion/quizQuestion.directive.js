(function() {
  'use strict';

  angular
    .module('frontend')
    .component('quizQuestion', {
      templateUrl: 'app/components/quizzes/shared/quizQuestion/quizQuestion.html',
      bindings: {
          question: '='
      },
      controller: quizQuestionController,
      controllerAs: 'ctrl'
    });



    /** @ngInject */
    function quizQuestionController() {
      var ctrl = this;
      
      

      
    }
})();

