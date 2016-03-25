FactoryGirl.define do
  factory :outcome , class: Outcome do |f|
    f.title "Test outcome one"
    f.description "This is the first test outcome"
    f.img_url "test_quiz_one/outcome1.jpg"
    f.points_to 10
    f.order_by 1
  end
end
