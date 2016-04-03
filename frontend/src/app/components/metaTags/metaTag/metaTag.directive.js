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
      link: metaTagLink,
    };

    return directive;

    function metaTagLink(scope, element, attrs){   
      var mtag= metaTag.getTag(attrs.name);
      element.attr('content', mtag.tcontent);   
    }
  }

})();
