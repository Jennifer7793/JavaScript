class Course < ApplicationRecord
  validates :name, presence: true 
  validates :price, presence: true, numericality: {
    
  }
end