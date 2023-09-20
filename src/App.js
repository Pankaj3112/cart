import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

import { firestore } from './index';
import { collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc,} from 'firebase/firestore';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }

    this.db = collection(firestore, 'products');
  }

  componentDidMount() {
    

    // getDocs(this.db)
    //   .then((snapshot) => {
    //     const products = snapshot.docs.map((doc) => {
    //       let data = doc.data();
    //       data['id'] = doc.id;
    //       return data
    //     });

    //     this.setState({
    //       products,
    //       loading: false
    //     })
    //   })

    //pass query instead of documenent refrence
    // let q = query(this.db, where('price', '>', 999), where('title', '==', "Laptop"));

    // for sorting
    // let q = query(this.db, orderBy('price', "desc"));


    onSnapshot(this.db, (snapshot) =>{
      const products = snapshot.docs.map((doc) => {
        let data = doc.data();
        data['id'] = doc.id;
        return data
      });
  
      this.setState({
        products,
        loading: false
      })
    });

  };

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    let index = products.indexOf(product);
    
    // products[index].qty += 1;

    // this.setState({
    //   totalQty: totalQty + 1,
    //   products
    // })

    const docRef = doc(this.db, products[index].id);
    updateDoc(docRef, {
      qty: products[index].qty + 1
    })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    let index = products.indexOf(product);

    if (products[index].qty === 0) return;

    // products[index].qty -= 1;

    // this.setState({
    //   totalQty: totalQty - 1,
    //   products
    // })

    const docRef = doc(this.db, products[index].id);
    updateDoc(docRef, {
      qty: products[index].qty - 1
    })
  }

  handleDeleteProduct = (id) => {    
    const docRef = doc(this.db, id);
    deleteDoc(docRef);
  }

  getCount = () => {
    const { products } = this.state;
    const totalQty = products.reduce((accumulator, product) => accumulator + product.qty, 0);
    return totalQty;
  }

  getTotalPrice = () => {
    const { products } = this.state;
    const totalPrice = products.reduce((accumulator, product) => accumulator + (product.qty * product.price), 0);
    return totalPrice;
  }

  addProduct = async () => {
    const dataToAdd = {
      img: "",
      qty: 10,
      title: "Headphones",
      price: 500
    }
    const docRef = await addDoc(this.db, dataToAdd);
    console.log("product added",docRef);
  }



  render() {
    const { products, loading } = this.state;

    return (
      <div className="App">
        <Navbar
          count={this.getCount()}
        />

        {/* <button onClick={this.addProduct} style={{padding: 10, position: "absolute", right: 10}}>Add Item to Cart</button> */}

        <Cart
          products={products}
          handleIncreaseQuantity={this.handleIncreaseQuantity}
          handleDecreaseQuantity={this.handleDecreaseQuantity}
          handleDeleteProduct={this.handleDeleteProduct}
        />

        {loading && <h1 style={{paddingLeft: 50}}>Loading Products ...</h1>}

        <div style={{paddingLeft: 50}}>
          <h1>TOTAL: ₹{this.getTotalPrice()}</h1>
        </div>
      </div>
    );
  }
}

export default App;
