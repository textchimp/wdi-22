class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.text :name
      t.text :image
      t.date :release_date

      t.timestamps
    end
  end
end
