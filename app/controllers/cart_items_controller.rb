class CartItemsController < ApplicationController

    def create
        cartItem = CartItem.create(cartItemParams)
       render json: cartItem
    end

    private 

    def cartItemParams
        params.permit( :cart_id, :key, :price, :title )
    end
end
