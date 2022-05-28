class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.string :cart_id
      t.integer :db_id
      t.float :price
      t.string :title

      t.timestamps
    end
  end
end
