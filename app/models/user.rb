class User < ApplicationRecord
  validates :email, :username, presence: true
  
  # before_create :encrypt_password

  # private
  # def encrypt_password
  #   self.password = 
end
