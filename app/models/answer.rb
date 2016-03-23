class Answer < ActiveRecord::Base
  belongs_to :question
  validates :order, :title, :points, presence: true

end
