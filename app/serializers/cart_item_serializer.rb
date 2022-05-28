class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :cart_id, :integer, :price, :integer, :db_id, :integer
end
