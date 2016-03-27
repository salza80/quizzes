FactoryGirl.define do
  factory :quiz , class: Quiz do
    sequence(:title) { |n| "Test quiz #{n}" }
    description "This is a quiz description"
    img_url "quizzes/quiz.jpg"
    sequence(:url_name) { |n| "test_quiz_#{n}" }
  end
end
