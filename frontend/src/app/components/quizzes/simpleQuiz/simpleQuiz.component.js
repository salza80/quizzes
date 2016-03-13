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
    var answers = [];
    ctrl.quiz = {};
    init();
    ctrl.nextQuestion = nextQuestion;

    function init() {
      quiz.getQuiz(ctrl.urlName).then(function(data){
       quizData = data;
       ctrl.quiz = quizData;
       ctrl.currentQuestion = quizData.questions[currentQuestionIndex];
       ctrl.totalQuestions = ctrl.quiz.questions.length;
      });
    }

    function nextQuestion(answer){
      answers.push(answer);
      console.log(currentQuestionIndex)
      console.log(quizData.questions.length)
      currentQuestionIndex += 1;
      if(currentQuestionIndex === quizData.questions.length){
        getOutcome()
      }else {
        ctrl.currentQuestion = quizData.questions[currentQuestionIndex];
      }
    } 

    function totalPoints(){
      var points = 0;
      for (var i=0; i< answers.length; i++){
        points += answers[i].points;
      }
      return points;
    }

    function getOutcome(){
      quiz.getResultCode(totalPoints()).then(function(data){
        console.log(data.result_code);
      })
    }
  }

  angular
  .module('frontend')
  .component('simpleQuiz', simpleQuiz);

})();
