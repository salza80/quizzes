(function() {
  'use strict';

  angular
    .module('frontend')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController() {
    var vm = this;
    vm.PageName = 'about'
  }
})();
