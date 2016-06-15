class CreateUsers < ActiveRecord::Migration
  def change
    create_table "users", force: :cascade do |t|
      t.text     "email"
      t.text     "password_digest"
      t.integer  "user_type",       default: 1
      t.datetime "created_at",      null: false
      t.datetime "updated_at",      null: false
    end
  end
end
