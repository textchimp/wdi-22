# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  has_many :songs, dependent: :destroy

  has_many :genres, through: :songs

  has_many :albums, through: :songs

end
