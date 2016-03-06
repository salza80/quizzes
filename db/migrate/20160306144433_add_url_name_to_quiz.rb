class AddUrlNameToQuiz < ActiveRecord::Migration
  def change
    add_column :quizzes, :url_name, :string
  end
end
