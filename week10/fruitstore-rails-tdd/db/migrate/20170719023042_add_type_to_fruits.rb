class AddTypeToFruits < ActiveRecord::Migration[5.0]
  def change
    add_column :fruits, :type, :string
  end
end
