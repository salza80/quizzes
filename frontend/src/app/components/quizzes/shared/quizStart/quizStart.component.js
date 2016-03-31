(function() {
  'use strict';
  var quizStart = {
      templateUrl: 'app/components/quizzes/shared/quizStart/quizStart.html',
      bindings: {
          quiz: '=',
          onBegin: '&'
      },
      controller: quizStartController,
      controllerAs: 'ctrl'
    };
    /** @ngInject */
    function quizStartController() {
      // var ctrl = this;
    }

  angular
  .module('frontend')
  .component('quizStart', quizStart);

})();

