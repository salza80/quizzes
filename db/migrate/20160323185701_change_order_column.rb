class ChangeOrderColumn < ActiveRecord::Migration
  def change
    rename_column :questions, :order, :order_by
    rename_column :answers, :order, :order_by
    rename_column :outcomes, :order, :order_by
  end
end
