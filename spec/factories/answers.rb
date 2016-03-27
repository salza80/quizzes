FactoryGirl.define do
  factory :answer , class: Answer do 
    sequence(:title) { |n| "Test answer #{n}" }
    points 1
    sequence(:order_by) { |n| n }
  end
end
