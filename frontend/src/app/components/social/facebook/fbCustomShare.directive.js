(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('fbCustomShare', fbCustomShare);

  /** @ngInject */
  function fbCustomShare() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/social/facebook/fbCustomShare.html',
      scope: {
          pageUrl: '@'
      },
      controller: fbCustomShareController,
      controllerAs: 'ctrl',
      bindToController: true,
      link: link
    };

    return directive;

    /** @ngInject */
    function fbCustomShareController() { 
      var ctrl = this;

      ctrl.FBShare = FBShare;
      
      function FBShare(){
        FB.ui({
          method: 'share',
          href: ctrl.pageUrl
        }, function(response){});
      }

    
    }
     /** @ngInject */
    function link(scope, element, attrs) {
      // if (!attrs.layout) { attrs.layout = 'button'; }
       
    }
  }

})();
