class AddShelfIdToFruit < ActiveRecord::Migration[5.0]
  def change
    add_column :fruits, :shelf_id, :integer
  end
end
