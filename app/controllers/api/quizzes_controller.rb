module Api
  class QuizzesController < ApplicationController
    def index
      @quizzes = Quiz.all
    end

    def create
      @quiz = Quiz.create(quiz_params)
      unless @quiz.save
        format.json { render json: @quiz.errors, status: :unprocessable_entity }
      end
    end

    def destroy
    end

    private

    def quiz_params
      params.require(:quiz).permit(:name)
    end
  end
end
