(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('fbLike', fbLike);

  /** @ngInject */
  function fbLike($timeout) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/social/facebook/fbLike.html',
      scope: {
          pageUrl: '@',
          layout: '@',
          action: '@',
          showFaces: '@',
          share: '@'

      },
      controller: fbLikeController,
      controllerAs: 'ctrl',
      bindToController: true,
      link: link
    };

    return directive;

    /** @ngInject */
    function fbLikeController() { 
      // var ctrl = this;

    
    }
     /** @ngInject */
    function link(scope, element, attrs) {
      if (!attrs.layout) { attrs.layout = 'button_count'; }
      if (!attrs.action) { attrs.action = 'like'; }
      if (!attrs.showFaces) { attrs.showFaces = 'false'; }
      if (!attrs.share) { attrs.share = 'false'; }
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
