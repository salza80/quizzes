(function() {
  'use strict';

  angular
      .module('frontend')
      .service('metaTag', metaTag);

  /** @ngInject */
  function metaTag($location) {
    var data = {};
    data.metaTags = [
      { 
        name: "description",
        tcontent: "this is my test description"
      },
      {
        name: "og:facebook",
        tcontent:"this is my facebook meta test"
      }
    ];

    this.fullUrl = fullUrl;
    this.domainUrl = domainUrl;

    this.updateTag = updateTag;
    this.getTags = getTags;
    this.getTag = getTag;

    function findTag(name){
      var tag;
      for (var i=0; i<data.metaTags.length; i++){
        if (data.metaTags[i].name === name){
          tag = data.metaTags[i];
        }
      }
      if(angular.isUndefined(tag)){
        tag = addTag(name);
      }
      return tag;
    }

    function addTag(name){
      var tag =   {
          name: name,
          tcontent: "" 
        };
      data.metaTags.push(tag);
      return tag;
    }

    function getTag(name){
     return findTag(name);

    }

    function updateTag(name, value){
      var tag = getTag(name);
      tag.tcontent = value;
    }

    function getTags(){
      return data.metaTags;
    }

    function fullUrl(){
      return $location.absUrl();
    }

    function domainUrl(){
      var fullUrl = $location.absUrl();
      var pathStartPos = fullUrl.search($location.path());
      var domainUrl = fullUrl.substr(0,pathStartPos);
      return domainUrl;
    }

  }
})();
