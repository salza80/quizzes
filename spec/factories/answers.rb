FactoryGirl.define do
  factory :answer , class: Answer do |f|
    f.title "Test answer one"
    f.points 5
    f.order_by 1
  end
end
