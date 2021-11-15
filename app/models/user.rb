class User < ApplicationRecord
  validate :email, :username, presence: true

  before_save :say_hello

  private
  def say_hello
    p "-" *30
    p "hi"
    p "-" *30
end
