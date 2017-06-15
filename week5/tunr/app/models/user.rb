class User < ApplicationRecord
  has_many :mixtapes
  has_secure_password
  validates :email, presence: true, uniqueness: true, length: {minimum: 5}
  validates :name, presence: true
end
