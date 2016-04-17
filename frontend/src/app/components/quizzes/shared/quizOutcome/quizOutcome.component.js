(function() {
  'use strict';
  var quizOutcome = {
      templateUrl: 'app/components/quizzes/shared/quizOutcome/quizOutcome.html',
      bindings: {
          quiz: '<',
          outcome: '<',
          score: '<'
      },
      controller: quizOutcomeController,
      controllerAs: 'ctrl'
    };
    /** @ngInject */
    function quizOutcomeController($scope, metaTag) {
      var ctrl = this; 

      $scope.$watch('ctrl.outcome', function(newValue) {
          if (angular.isDefined(newValue)) {
            setOutcomeMetaTags();
          }
      });

      ctrl.resultTitle = resultTitle;

      function percent(){
        if (ctrl.score === 0){return 0;}
        var per = ( ctrl.score / ctrl.quiz.max_points ) * 100;
        return per;
      }

      function resultTitle(){
        return "You scored: " + String(ctrl.score) + " of " + String(ctrl.quiz.max_points) + " (" + String(percent()) + " %)";
      }

      function setOutcomeMetaTags(){
        metaTag.updateTag('description', ctrl.quiz.title);
        metaTag.updateTag('og:title',  ctrl.quiz.title);
        metaTag.updateTag('og:image', metaTag.domainUrl() + '/assets/images/' + ctrl.outcome.img_url);
        metaTag.updateTag('og:description', ctrl.resultTitle());
        metaTag.updateTag('og:url', metaTag.fullUrl());
      }
    }

  angular
  .module('frontend')
  .component('quizOutcome', quizOutcome);

})();

