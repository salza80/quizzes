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
          pageUrl: '&'
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
    function link(scope, element) {
      //fix this better than set timout
      $timeout(function() {
        FB.XFBML.parse(element.parent()[0]);
      }, 3000);
    }
  }

})();
