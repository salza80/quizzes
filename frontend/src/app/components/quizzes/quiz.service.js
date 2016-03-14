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
      },
      {
        resultcode: {
          url: '/api/quizzes/result_code/.json',
          method: 'POST',
          params: {points: '@points'}
        },
        outcome: {
          url: '/api/quizzes/:name_url/outcome/:result_code.json',
          method: 'GET'
        }
      });
    var quizzes = {};
    quizzes.list=[];
    var quiz = {};
    quiz.active = {};

    this.getList = getList;
    this.getQuiz = getQuiz;
    this.getResultCode = getResultCode;
    this.getOutcome = getOutcome;

    function getList() {
      quizzes.list = Quiz.query();
      return quizzes;
    }
    function getQuiz(name_url){
      quiz.active = Quiz.get({name_url: name_url});
      return quiz
    }

    function getResultCode(points){
      quiz.result_code = Quiz.resultcode({points: points});
      return quiz
    }
    function getOutcome(name_url, points){
      quiz.outcome = quiz.outcome({name_url: name_url, points: points});
      return quiz
    }
  }
})();
