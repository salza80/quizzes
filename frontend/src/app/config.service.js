(function() {
  'use strict';

  angular
      .module('frontend')
      .service('config', config);

  /** @ngInject */
  function config($http, $window, $q) {
    var initialised  = false;
    var config = {};
    config.env = {};

    this.initConfig = initConfig;
    this.getConfig = getConfig;

    function initFacebook(){
      $window.fbAsyncInit = function() {
        FB.init({ 
          appId: config.env.FACEBOOK_APP_ID, 
          // channelUrl: 'app/channel.html', 
          status: true, 
          cookie: true, 
          xfbml: true,
          version: 'v2.4'
        });
      }
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
   
   
    function initConfig() {
      var deferred = $q.defer();
      //return imediately if already initialised
      if(initialised){
        return deferred.resolve();
      }
      //get config variables and init facebook before resolve
      $http.get('api/config.json').then(function(response){
        config.env = response.data;
        initFacebook();
        initialised = true;
        deferred.resolve();
      });
      return deferred.promise;
    }

    function getConfig() {
      return config.env;
    }
  }
})();
