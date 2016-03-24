(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('fbComments', fbComments);

  /** @ngInject */
  function fbComments($timeout) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/social/facebook/fbComments.html',
      scope: {
          pageUrl: '@',
          width: '@',
          numPosts: '@'
      },
      controller: fbCommentsController,
      controllerAs: 'ctrl',
      bindToController: true,
      link: link
    };

    return directive;

    /** @ngInject */
    function fbCommentsController() { 
      // var ctrl = this;

    
    }
     /** @ngInject */
    function link(scope, element, attrs) {
      if (!attrs.width) { attrs.width = '500'; }
      if (!attrs.numPosts) { attrs.numPosts = '10'; }
      scope.$watchGroup(
        ["ctrl.width", "ctrl.numPosts", "ctrl.pageUrl"],
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
