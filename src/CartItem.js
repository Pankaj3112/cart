import React from "react";

class CartItem extends React.Component{

    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () =>{
        //form 1 of set state
        // this.setState({
        //     qty: this.state.qty+1,
        // })

        //form 2 of set state - if prev state required
        this.setState((prevState) => {
           return {
                qty: prevState.qty+1,
           }
        })
    }

    decreaseQuantity = () =>{
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        })
    }



    render(){

        const {price, title, qty} = this.state;

        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>

                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                </div>

                <div className="cart-item-actions">
                    {/* Buttons */}
                    <span className="action-icons" onClick={this.increaseQuantity}>
                        <i className="fa-solid fa-plus"></i>
                    </span>

                    <span className="action-icons" onClick={this.decreaseQuantity}>
                        <i className="fa-solid fa-minus"></i>
                    </span>

                    <span className="action-icons" onClick={this.increaseQuantity}>
                        <i className="fa-solid fa-trash"></i>
                    </span>
                    
                </div>
            </div>
        );
    }
};


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;