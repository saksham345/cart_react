import React from 'react';
import CartItem from './CartItem'
import './index.css'

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products : [
                {
                    price : 10000,
                    title : 'Phone',
                    qty : 20,
                    img : "",
                    id : 1
                } , 
                {
                    price : 2000,
                    title : 'Watch',
                    qty : 50,
                    img : "",
                    id : 2
                } , 
                {
                    price : 60000,
                    title : 'Laptop',
                    qty : 10,
                    img : "",
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

    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map( (product) => {
                    return <CartItem 
                        product={product} 
                        key={product.id} 
                        handleIncreaseQuantity={this.handleIncreaseQuantity} 
                        handleDecreaseQuantity={this.handleDecreaseQuantity}
                        handleDeleteProduct={this.handleDeleteProduct}  
                    />
                })
                }
            </div>
        )
    }
}

export default Cart