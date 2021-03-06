# == Schema Information
#
# Table name: albums
#
#  id           :integer          not null, primary key
#  name         :text
#  image        :text
#  release_date :date
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Album < ApplicationRecord
  has_many :songs

  has_many :artists, through: :songs


end
