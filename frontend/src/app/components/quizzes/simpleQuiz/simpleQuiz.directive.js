(function() {
  'use strict';

  angular
    .module('frontend')
    .directive('simpleQuiz', simpleQuiz)

  /** @ngInject */
  function simpleQuiz(quiz) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/quizzes/simpleQuiz/simpleQuiz.html',
      scope: {
          urlName: '='
      },
      controller: simpleQuizController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function simpleQuizController() {
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
  }
})();
