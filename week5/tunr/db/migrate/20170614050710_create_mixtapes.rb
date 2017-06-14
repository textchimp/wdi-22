class CreateMixtapes < ActiveRecord::Migration[5.0]
  def change
    create_table :mixtapes do |t|
      t.text :title
      t.boolean :is_fire

      t.timestamps
    end
  end
end
