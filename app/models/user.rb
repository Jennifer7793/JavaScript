class User < ApplicationRecord
  validates :email, :username, presence: true
  
  has_many :courses

  before_create :encrypt_password

  def self.login(user_info)
    email = user_info[:email]

    salted_password = "xy#{passowrd.reverse}hellohey"
    encryted_password = Digest::SHA1.hexidigest(salted_password)

    self.find_by(email: email, password: encryted_password)
  end

  private
  def encrypt_password
    self.password = "xy#{self.password.reverse}hellohey"
    self.password = Digest::SHA1.hexidigest(salted_password)
  end
end
