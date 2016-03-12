(function() {
  'use strict';
/** @ngInject */
  var simpleQuiz = {
    templateUrl: 'app/components/quizzes/simpleQuiz/simpleQuiz.html',
    bindings: {
        urlName: '='
    },
    controller: simpleQuizController,
    controllerAs: 'ctrl'
  };



  /** @ngInject */
  function simpleQuizController(quiz) {
    var ctrl = this;
    var currentQuestionIndex = 0;
    var quizData= {};
    ctrl.quiz = {};
    init();
    ctrl.nextQuestion = nextQuestion;


    

    function init() {
      quiz.getQuiz(ctrl.urlName).then(function(data){
       quizData = data;
       ctrl.quiz = quizData
       ctrl.currentQuestion = quizData.questions[currentQuestionIndex]
       ctrl.totalQuestions = ctrl.quiz.questions.length
      });
    }

    function nextQuestion(){
      currentQuestionIndex += 1
      ctrl.currentQuestion = quizData.questions[currentQuestionIndex]
    } 
  }

  angular
  .module('frontend')
  .component('simpleQuiz', simpleQuiz)
  
})();
