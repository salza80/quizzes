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
  function simpleQuizController(quiz, $location, imagePreloader, metaTag) {
    var ctrl = this;
    var currentQuestionIndex = 0;
    var quizData= {};
    var answers = [];
    ctrl.showQuestions = false;
    ctrl.showOutcome = false;
    ctrl.showStart = false;
    ctrl.quiz = {};
    ctrl.nextQuestion = nextQuestion;
    ctrl.current_question_no = current_question_no;
    ctrl.begin = begin;
    init();
    function init() {
      getQuiz();
    }

    function getQuiz(){
     quizData = quiz.getQuiz(ctrl.urlName);
      quizData.active.$promise.then(function(){
        ctrl.quiz = quizData.active;
        ctrl.currentQuestion = quizData.active.questions[currentQuestionIndex];
        ctrl.totalQuestions = ctrl.quiz.questions.length;
        preloadImages();
        if (angular.isDefined(ctrl.resultCode)){
          getOutcome(ctrl.urlName, ctrl.resultCode);
          ctrl.showOutcome=true;
        } else {
          setQuizMetaTags();
          ctrl.showStart = true;
        }
      });
    }

    function setQuizMetaTags(){
      metaTag.updateTag('description', quizData.active.title);
      metaTag.updateTag('og:title', quizData.active.title);
      metaTag.updateTag('og:image', domainUrl() + '/assets/images/' + quizData.active.img_url);
      metaTag.updateTag('og:description', quizData.active.description);
    }

    function setOutcomeMetaTags(){
      metaTag.updateTag('description', quizData.active.title);
      metaTag.updateTag('og:title', quizData.active.title);
      metaTag.updateTag('og:image', domainUrl() + '/assets/images/' + quizData.outcome.img_url);
      metaTag.updateTag('og:description', quizData.outcome.description);
    }

    function begin(){
      ctrl.showStart=false;
      ctrl.showQuestions = true;
    }

    function preloadImages(){
      var imagePreload = [];
      for (var i=0; i < quizData.active.questions.length; i++){
        if(quizData.active.questions[i].img_url !== ''){
          imagePreload[i] = 'assets/images/' + quizData.active.questions[i].img_url;
        }
      }
      imagePreloader.preloadImages( imagePreload ).then(function() {
           // console.log('success');
        },
        function() {
            // console.log('failed atlease one image');
        }
      );
    }

    function fullUrl(){
      return $location.absUrl();
    }

    function quizUrl(){
      var fullUrl = $location.absUrl();
      var urlNameEndPos = fullUrl.search(ctrl.urlName) + ctrl.urlName.length;
      var quizUrl = fullUrl.substr(0,urlNameEndPos);
      return quizUrl;
    }

    function domainUrl(){
      var fullUrl = $location.absUrl();
      var pathStartPos = fullUrl.search($location.path())
      var domainUrl = fullUrl.substr(0,pathStartPos);
      return domainUrl;
    }

    function current_question_no(){
      return currentQuestionIndex + 1;
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
      quizData = quiz.getOutcome(urlName, resultCode);
      quizData.outcome.$promise.then(function(data){
        ctrl.outcome = quizData.outcome;
        setOutcomeMetaTags();
      });
    }
  }
  angular
  .module('frontend')
  .component('simpleQuiz', simpleQuiz);

})();
