class Quiz < ActiveRecord::Base
  has_many :questions, dependent: :destroy
  has_many :outcomes, dependent: :destroy
  validates :title, :description, :img_url, :url_name, presence: true


  def max_points
    total = 0
    questions.each do |q|
      total += q.max_points
    end
    total
  end
end
