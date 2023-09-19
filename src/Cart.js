import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{

    // constructor(){
    //     super();
    //     this.state = {
    //        products: [
    //             {
    //                 price: 999,
    //                 title: 'Mobile Phone',
    //                 qty: 10,
    //                 img: '',
    //                 id: 1
    //             },

    //             {
    //                 price: 9999,
    //                 title: 'Laptop',
    //                 qty: 1,
    //                 img: '',
    //                 id: 2
    //             },

    //             {
    //                 price: 199,
    //                 title: 'Watch',
    //                 qty: 1,
    //                 img: '',
    //                 id: 3
    //             }
    //        ]
    //     }
    // }

    // handleIncreaseQuantity = (product) =>{
    //     const {products} = this.state;
    //     let index = products.indexOf(product);
    //     products[index].qty += 1;

    //     this.setState({
    //         products
    //     })
    // }

    // handleDecreaseQuantity = (product) =>{
    //     const {products} = this.state;
    //     let index = products.indexOf(product);

    //     if(products[index].qty === 0) return;

    //     products[index].qty -= 1;

    //     this.setState({
    //         products
    //     })
    // }

    // handleDeleteProduct = (id) =>{
    //     const {products} = this.state;
    //     const items = products.filter((item) =>{
    //         return item.id !== id;
    //     })

    //     this.setState({
    //         products: items
    //     })
    // }


    render(){
        const {products, handleIncreaseQuantity, handleDecreaseQuantity, handleDeleteProduct} = this.props;

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
    }
};


export default Cart;