class Answer < ActiveRecord::Base
  belongs_to :question
  validates :order_by, :title, :points, presence: true
  default_scope {order('order_by DESC')}
end
