(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('quizzes', quizzes);

  /** @ngInject */
  function quizzes() {
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
      console.log(ctrl.items)

    }
  }

})();
