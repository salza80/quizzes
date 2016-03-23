class Question < ActiveRecord::Base
  belongs_to :quiz
  has_many :answers, dependent: :destroy
  validates :order, :title, presence: true
  default_scope {order('order_by DESC')}
end
