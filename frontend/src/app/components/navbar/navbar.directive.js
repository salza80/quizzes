(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('quizNavbar', quizNavbar);

  /** @ngInject */
  function quizNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      
    }
  }

})();
