class Flight < ActiveRecord::Base
  validates :number,:from, :to, :date, :plane_id, presence: true
  belongs_to :plane

  has_many :reservations
  has_many :users, :through => :reservations
end
