(function() {
  'use strict';

  angular
      .module('frontend')
      .service('quiz', quiz);

  /** @ngInject */
  function quiz($resource) {
    var Quiz = $resource('/api/quizzes.json', {
      query: {method: 'get', isArray: true, cancellable: true}
    });
    var data = [
      {
        'title': 'random stuff Quiz',
        'description': 'https://angularjs.org/',
        'img_url': 'HTML enhanced for web apps!'
      }
    ];

    this.getList = getList;

    function getList() {
      data = Quiz.query()
      return data;
    }
  }

})();
