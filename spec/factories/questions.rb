FactoryGirl.define do
  factory :question , class: Question do
    sequence(:title) { |n| "Test question #{n}" }
    description "This is a test question"
    img_url "test_quiz_one/question.jpg"
    sequence(:order_by) { |n| n }
  end
end

