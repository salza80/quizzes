FactoryGirl.define do
  factory :outcome , class: Outcome do
    sequence(:title) { |n| "Test outcome #{n}" }
    description "This is a test outcome"
    img_url "quizzes/outcome.jpg"
    sequence(:points_to) do |n| 
      n * 3
    end
    sequence(:order_by) { |n| n }
  end
end
