# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  name       :text
#  artist_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  album_id   :integer
#

class Song < ApplicationRecord
  has_and_belongs_to_many :genres
  belongs_to :artist, optional: true
  belongs_to :album, optional: true
end
