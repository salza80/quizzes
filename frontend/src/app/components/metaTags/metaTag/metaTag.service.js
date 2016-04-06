(function() {
  'use strict';

  angular
      .module('frontend')
      .service('metaTag', metaTag);

  /** @ngInject */
  function metaTag() {
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

    this.updateTag = updateTag;
    this.getTags = getTags;
    this.getTag = getTag;


    function addTag(name){
      data.metaTags.push(
        {
          name: name,
          tcontent: "" 
        }
      )
    }

    function getTag(name){
     var filtered = data.metaTags.filter(function isBigEnough(value) {
      return value.name == name;
      })
      if (filtered.length == 0) {
        addTag(name);
      }
      return filtered[0]

    }

    function updateTag(name, value){
      var tag = getTag(name);
      tag.tcontent = value;
    }

    function getTags(){
      console.log(data.metaTags)
      return data.metaTags
    }
  }
})();
