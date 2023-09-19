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
          img: '',
          id: 1
        },

        {
          price: 9999,
          title: 'Laptop',
          qty: 1,
          img: '',
          id: 2
        },

        {
          price: 199,
          title: 'Watch',
          qty: 1,
          img: '',
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
      </div>
    );
  }
}

export default App;
