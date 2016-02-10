module Api
  class QuizzesController < ApplicationController
    def index
      @quizzes = Quiz.all
    end

    def create
    end

    def destroy
    end

    # private

    # def quiz_params
    #   params.require(:quiz).permit(:name)
    # end
  end
end
