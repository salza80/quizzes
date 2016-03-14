(function() {
  'use strict';
  var quizOutcome = {
      templateUrl: 'app/components/quizzes/shared/quizOutcome/quizOutcome.html',
      bindings: {
          outcome: '='
      },
      controller: quizOutcomeController,
      controllerAs: 'ctrl'
    };
    /** @ngInject */
    function quizOutcomeController() {
      // var ctrl = this; 
    }

  angular
  .module('frontend')
  .component('quizOutcome', quizOutcome);

})();

