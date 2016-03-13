module Api
  class QuizzesController < ApplicationController
    def index
      @quizzes = Quiz.all
    end

    # def create
    #   @quiz = Quiz.create(quiz_params)
    #   unless @quiz.save
    #     render json: @quiz.errors, status: :unprocessable_entity
    #   end
    # end
    def show
      @quiz = Quiz.includes(questions: [:answers]).find_by(url_name: params[:url_name])
    end

    # finish the quiz, return result code
    def result_code
      @result = Base64.urlsafe_encode64(params[:points])
    end

    private

    def quiz_params
      params.require(:result).permit(:points, :url_name)
    end

    # def quiz_params
    #   params.require(:quiz).permit(:name)
    # end
  end
end
