(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('fbShare', fbShare);

  /** @ngInject */
  function fbShare($timeout) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/social/facebook/fbShare.html',
      scope: {
          pageUrl: '@',
          layout: '@'
      },
      controller: fbShareController,
      controllerAs: 'ctrl',
      bindToController: true,
      link: link
    };

    return directive;

    /** @ngInject */
    function fbShareController() { 
      // var ctrl = this;

    
    }
     /** @ngInject */
    function link(scope, element, attrs) {
      if (!attrs.layout) { attrs.layout = 'button'; }
       
      scope.$watch(
        "ctrl.pageUrl",
        function handleWatchValueChange() {
          fbRefresh();
        }
      );
      //timeout without time will run after dom is loaded
      
      $timeout(function() {
        fbRefresh();
      });

      function fbRefresh(){
        FB.XFBML.parse(element.parent()[0]);
      }
    }
  }

})();
