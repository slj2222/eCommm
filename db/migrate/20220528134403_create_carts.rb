class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :session_id

      t.timestamps
    end
  end
end
