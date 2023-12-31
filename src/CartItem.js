import React from "react";

const CartItem = (props) => {
    const {price, title, qty, img} = props.product;
    const {increaseQuantity, decreaseQuantity, deleteProduct, product} = props;

    return(
        <div className="cart-item">
            <div className="left-block">
                <img src={img} style={styles.image} alt=""/>
            </div>

            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color: '#777'}}>Rs {price}</div>
                <div style={{color: '#777'}}>Qty: {qty}</div>

                <div className="cart-item-actions">
                    {/* Buttons */}
                    <span className="action-icons" 
                        onClick={() => {increaseQuantity(product)}}>
                        <i className="fa-solid fa-plus"></i>
                    </span>

                    <span className="action-icons" 
                        onClick={() => {decreaseQuantity(product)}}>
                        <i className="fa-solid fa-minus"></i>
                    </span>

                    <span className="action-icons" 
                        onClick={() => {deleteProduct(product.id)}}>
                        <i className="fa-solid fa-trash"></i>
                    </span>
                    
                </div>
            </div>
            
        </div>
    );
};


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc',
        objectPosition: "center",
        objectFit: "cover"
    }
}

export default CartItem;