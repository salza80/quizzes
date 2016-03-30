class Question < ActiveRecord::Base
  belongs_to :quiz
  has_many :answers, dependent: :destroy
  validates :order_by, :title, presence: true
  default_scope {order('order_by DESC')}


  def max_points
    answers.ordered_by_points.limit(1).pluck(:points).first
  end
end

