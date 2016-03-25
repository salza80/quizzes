FactoryGirl.define do
  factory :question , class: Question do |f|
    f.title "Test question one"
    f.description "This is the first test question"
    f.img_url "test_quiz_one/question1.jpg"
    f.order_by 1
  end
end
