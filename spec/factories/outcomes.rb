FactoryGirl.define do
  factory :outcome , class: Outcome do
    sequence(:title) { |n| "Test outcome #{n}" }
    description "This is a test outcome"
    img_url "test_quiz_1/outcome.jpg"
    points_to 10
    sequence(:order_by) { |n| n }
  end
end
