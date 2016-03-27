module SetupData
  def create_quizzes
    create(:quiz) do |quiz|
        quiz.outcomes = create_list(:outcome, 5)
        quiz.questions = create_list(:question, 15) do |question|
            question.answers = create_list(:answer, 4)
        end
    end
  end   
end

RSpec.configure do |config|
  config.include SetupData
end
