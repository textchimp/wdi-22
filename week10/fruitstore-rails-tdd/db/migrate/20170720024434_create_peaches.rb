class CreatePeaches < ActiveRecord::Migration[5.0]
  def change
    create_table :peaches do |t|
      t.string :name

      t.timestamps
    end
  end
end
