class CreateMixtapesSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :mixtapes_songs do |t|
      t.integer :mixtape_id
      t.integer :song_id
    end
  end
end
