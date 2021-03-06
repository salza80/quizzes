module Api
  class QuizzesController < ApplicationController
    # respond_to :json
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
      render json: {message: 'Resource not found'}, status: :not_found if @quiz.nil? 
    end

    # finish the quiz, return result code
    def result_code
      @result = ResultEncoder.new(params[:points]).encoded
    end

    # get outcome based on points
    def outcome
      points = ResultEncoder.new(params[:result_code]).decoded
      quiz =  Quiz.find_by(url_name: params[:url_name])
      @outcome = quiz.outcomes.find_by_points(points)
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
