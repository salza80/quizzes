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
          activeMenu: '&'
      },
      controller: NavbarController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() { 
      var ctrl = this;
      ctrl.getClass = function(item){
        if(item == ctrl.activeMenu()){
          return 'active'
        }else {
          return ''
        }
      }
      
    }
  }

})();
