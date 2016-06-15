class AddBooleanToReservations < ActiveRecord::Migration
  def change
      add_column :reservations, :reserved, :boolean
  end
end
