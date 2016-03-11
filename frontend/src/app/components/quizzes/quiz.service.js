(function() {
  'use strict';

  angular
      .module('frontend')
      .service('quiz', quiz);

  /** @ngInject */
  function quiz($resource) {
    var Quiz = $resource('/api/quizzes/:name_url.json', {
      query: {method: 'GET', isArray: true, cancellable: true},
      get: {method:'GET', params: {name_url: '@name_url'}}
    });
    var quizzes = {};
    quizzes.list=[];
    var quiz = {}
    quiz.active = {}

    this.getList = getList;
    this.getQuiz = getQuiz;

    function getList() {
      quizzes.list = Quiz.query()
      return quizzes;
    }
    function getQuiz(name_url){
      quiz.active = Quiz.get({name_url: name_url})
      return quiz;
    }
  }
})();
