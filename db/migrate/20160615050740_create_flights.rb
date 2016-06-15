class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :name
      t.string :origin
      t.string :destination
      t.datetime :departure
      t.integer :plane_id

      t.timestamps null: false
    end
  end
end
