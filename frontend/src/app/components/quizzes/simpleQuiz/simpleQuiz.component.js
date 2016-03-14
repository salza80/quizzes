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
      quizData = quiz.getQuiz(ctrl.urlName)
      quizData.active.$promise.then(function(){
        ctrl.quiz = quizData.active
        ctrl.currentQuestion = quizData.active.questions[currentQuestionIndex];
        ctrl.totalQuestions = ctrl.quiz.questions.length;
      })
    }

    function nextQuestion(answer){
      answers.push(answer);
      currentQuestionIndex += 1;
      if(currentQuestionIndex === quizData.active.questions.length){
        finishQuiz()
      }else {
        ctrl.currentQuestion = quizData.active.questions[currentQuestionIndex];
      }
    } 

    function totalPoints(){
      var points = 0;
      for (var i=0; i< answers.length; i++){
        points += answers[i].points;
      }
      return points;
    }

    function finishQuiz(){
      quiz.getResultCode(totalPoints())
      quizData.result_code.$promise.then(function(data){
        //redirect URL to outcome

        // console.log(data.result_code);
      })
    }
  }

  angular
  .module('frontend')
  .component('simpleQuiz', simpleQuiz);

})();
