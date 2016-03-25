FactoryGirl.define do
  factory :quiz , class: Quiz do |f|
    f.title "Test quiz one"
    f.description "This is the first test quiz"
    f.img_url "test_quiz_one/quiz1.jpg"
    f.url_name "test_quiz_one"
  end
end
