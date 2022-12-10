import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products : [
            {
                price : 10000,
                title : 'Phone',
                qty : 2,
                img : "https://m.media-amazon.com/images/I/41vVavfyzxS._SX300_SY300_QL70_FMwebp_.jpg",
                id : 1
            } , 
            {
                price : 2000,
                title : 'Watch',
                qty : 5,
                img : "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398806-sm-r865fzkainu-481079662?$730_584_PNG$",
                id : 2
            } , 
            {
                price : 60000,
                title : 'Laptop',
                qty : 6,
                img : "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663415676/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245232_0_pin6ch.png/mxw_2048,f_auto",
                id : 3
            }
        ]
    }
}

  handleIncreaseQuantity = (product) => {
      let {products} = this.state;
      let index = products.indexOf(product);

      products[index].qty = product.qty + 1;

      this.setState({
          products : products
      });
  }

  handleDecreaseQuantity = (product) => {
      let {products} = this.state;
      let index = products.indexOf(product);

      if(products[index].qty > 0){
          products[index].qty = product.qty - 1;
      }

      this.setState({
          products : products
      });
  }

  handleDeleteProduct = (id) => {
      let {products} = this.state;
      let items = products.filter((item) => {
          return item.id !== id
      });

      this.setState({
          products : items
      });
  }

  getCount = () => {
    let {products} = this.state;
    let count = 0;

    products.forEach( (item) => {
      count = count + item.qty;
    })

    return count;
  }

  getTotal = () => {
    let {products} = this.state;
    let total = 0;

    products.forEach( (item) => {
      total = total + (item.qty * item.price);
    })

    return total;
  }

  render(){
    const {products} = this.state
    return (
      <div className="App">
        <Navbar count={this.getCount()} />
        <Cart 
          products={products}
          handleIncreaseQuantity={this.handleIncreaseQuantity} 
          handleDecreaseQuantity={this.handleDecreaseQuantity} 
          handleDeleteProduct={this.handleDeleteProduct} 
        />
        <div style={{fontSize:"25px" , padding:"20px"}}>TOTAL PRICE : {this.getTotal()}</div>
      </div>
    );
  }
}

export default App;
