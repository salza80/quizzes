(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('metaTag', metaTag);

  /** @ngInject */
  function metaTag(metaTag) {
    var directive = {
      restrict: 'A',
      scope: {
      },
      link: metaTagLink
    };

    return directive;

    function metaTagLink(scope, element, attrs){ 
    
      function updateContent(content){
        var mtag =  metaTag.getTag(attrs.name);
        element.attr('content', mtag.tcontent);
      }
      updateContent()

      scope.$watch(function(){return metaTag.getTag(attrs.name)}, function(){ 
        updateContent();
      }, true)  
    }
  }

})();
