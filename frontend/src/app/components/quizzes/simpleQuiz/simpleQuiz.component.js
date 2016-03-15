(function() {
  'use strict';
/** @ngInject */
  var simpleQuiz = {
    templateUrl: 'app/components/quizzes/simpleQuiz/simpleQuiz.html',
    bindings: {
        urlName: '=',
        resultCode: '='
    },
    controller: simpleQuizController,
    controllerAs: 'ctrl'
  };

  /** @ngInject */
  function simpleQuizController(quiz, $location) {
    var ctrl = this;
    var currentQuestionIndex = 0;
    var quizData= {};
    var answers = [];
    ctrl.showQuestions = false;
    ctrl.showOutcome = false;
    ctrl.quiz = {};
    ctrl.nextQuestion = nextQuestion;
      init();

    function init() {
      if (angular.isDefined(ctrl.resultCode)){
        getOutcome(ctrl.urlName, ctrl.resultCode);
      } else {
       getQuiz();
      }
    }

    function getQuiz(){
     quizData = quiz.getQuiz(ctrl.urlName);
     ctrl.showQuestions = true;
      quizData.active.$promise.then(function(){
        ctrl.quiz = quizData.active;
        ctrl.currentQuestion = quizData.active.questions[currentQuestionIndex];
        ctrl.totalQuestions = ctrl.quiz.questions.length;
      });
    }

    function nextQuestion(answer){
      answers.push(answer);
      currentQuestionIndex += 1;
      if(currentQuestionIndex === quizData.active.questions.length){
        finishQuiz();
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
      quiz.getResultCode(totalPoints());
      quizData.result_code.$promise.then(function(data){
        //redirect URL to outcome
        var path = $location.path();
        $location.path(path + '/result/' + data.result_code);
      });
    }

    function getOutcome(urlName, resultCode){
      ctrl.showOutcome=true;
      quizData = quiz.getOutcome(urlName, resultCode);
      quizData.outcome.$promise.then(function(data){
        ctrl.outcome = quizData.outcome;
      });
    }
  }

  angular
  .module('frontend')
  .component('simpleQuiz', simpleQuiz);

})();
