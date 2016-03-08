class AddQuestionTables < ActiveRecord::Migration
  def change

    create_table :questions do |t|
      t.integer :order, null:false
      t.string :title, null:false
      t.text :description
      t.string :img_url
      t.references :quiz , index: true
    end
    add_foreign_key :questions, :quizzes


    create_table :answers do |t|
      t.integer :order, null:false
      t.string :title, null:false
      t.integer :points, null:false
      t.references :question
    end
    add_foreign_key :answers, :questions


    create_table :outcomes do |t|
      t.integer :order, null:false
      t.string :title, null:false
      t.text :description
      t.string :img_url
      t.integer :points_to, null:false
      t.references :quiz
    end
    add_foreign_key :outcomes, :quizzes
  end
end
