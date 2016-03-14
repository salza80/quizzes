class Outcome < ActiveRecord::Base
  belongs_to :quiz


  def self.find_by_points(points)
    where(':points <= points_to', points: points)
    .order('points_to DESC').first
  end

end
