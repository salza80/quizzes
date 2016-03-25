class Outcome < ActiveRecord::Base
  belongs_to :quiz
  validates :order_by, :title, :points_to, presence: true
  # default_scope {order('points_to DESC')}

  def self.find_by_points(points)
    where(':points <= points_to', points: points)
    .order('points_to ASC').first
  end

end
