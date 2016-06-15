class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.belongs_to :user, index: true
      t.belongs_to :flight, index: true
      t.integer :column_number
      t.integer :row_number

      t.timestamps null: false
    end
  end
end
