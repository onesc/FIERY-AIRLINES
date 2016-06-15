class Flight < ActiveRecord::Base
  validates :name, :departure, :origin, :destination,:plane_id, presence: true
  belongs_to :plane

  has_many :reservations
  has_many :users, :through => :reservations
end
