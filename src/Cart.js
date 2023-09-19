import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    const {products, handleIncreaseQuantity, handleDecreaseQuantity, handleDeleteProduct} = props;

    return(
        <div className="cart">
            {products.map(product => {
                return <CartItem 
                    product= {product} 
                    key= {product.id}
                    increaseQuantity = {handleIncreaseQuantity}
                    decreaseQuantity = {handleDecreaseQuantity}
                    deleteProduct = {handleDeleteProduct}
                />
            })}
        </div>
    )

};


export default Cart;