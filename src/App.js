import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
          id: 1
        },

        {
          price: 9999,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
          id: 2
        },

        {
          price: 199,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80',
          id: 3
        }
      ]
    }
  }

  handleIncreaseQuantity = (product) => {
    const { products, totalQty } = this.state;
    let index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      totalQty: totalQty+1,
      products
    })
  }

  handleDecreaseQuantity = (product) => {
    const { products, totalQty } = this.state;
    let index = products.indexOf(product);

    if (products[index].qty === 0) return;

    products[index].qty -= 1;

    this.setState({
      totalQty: totalQty - 1,
      products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    
    let total = 0;
    const items = products.filter((item) => {
      if(item.id !== id){
        total += item.qty;
      }

      return item.id !== id;
    })

    console.log(total);

    this.setState({
      totalQty: total,
      products: items
    })
  }

  getCount = () => {
    const {products} = this.state;
    const totalQty = products.reduce((accumulator, product) => accumulator + product.qty, 0);
    return totalQty;
  }

  getTotalPrice = () => {
    const {products} = this.state;
    const totalPrice = products.reduce((accumulator, product) => accumulator + (product.qty * product.price), 0);
    return totalPrice;
  }



  render() {
    const {products} = this.state;

    return (
      <div className="App">
        <Navbar 
          count = {this.getCount()}
        />
        <Cart 
          products={products}
          handleIncreaseQuantity = {this.handleIncreaseQuantity}
          handleDecreaseQuantity = {this.handleDecreaseQuantity}
          handleDeleteProduct = {this.handleDeleteProduct}
        />

        <div style={{paddingLeft: 50}}>
          <h1>TOTAL: ₹{this.getTotalPrice()}</h1>
        </div>
      </div>
    );
  }
}

export default App;
