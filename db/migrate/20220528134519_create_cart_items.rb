class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.string :cart_id
      t.string :integer
      t.string :price
      t.string :integer
      t.string :db_id
      t.string :integer

      t.timestamps
    end
  end
end
