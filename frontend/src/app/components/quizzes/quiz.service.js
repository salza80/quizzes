(function() {
  'use strict';

  angular
      .module('frontend')
      .service('quiz', quiz);

  /** @ngInject */
  function quiz($resource) {
    var Quiz = $resource('/api/quizzes.json', {
      query: {method: 'GET', isArray: true, cancellable: true},
      save: {method: 'POST'}
    });
    var quizzes = {};
    quizzes.list=[]

    this.getList = getList;
    this.addQuiz = addQuiz;
    this.getNew = getNew

    function getList() {
      quizzes.list = Quiz.query()
      return quizzes;
    }
    function addQuiz(quiz){
      Quiz.save(quiz, function success(){
        quizzes.list.push(angular.copy(quiz));
      })
    }
    function getNew(){
      return {name: 'hello'}
    }
  }
})();
