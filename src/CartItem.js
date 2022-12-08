import React from 'react';
import './index.css'

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = () => {
        // this.state.qty += 1;
        console.log(this.state);   
        // setState form 1 => used if previous state not required
        // this.setState({
        //     qty: this.state.qty+1
        // });

        //setState form 2 => used if previous state is required..
        this.setState((prevState) => {
            return {
                qty: prevState.qty+1
            }
        });
    }

    decreaseQuantity = () => {
        //setState form 2 => used if previous state is required..
        const {qty} = this.state.qty;
        if(qty === 0)
        return;
        this.setState((prevState) => {
            return {
                qty: prevState.qty-1
            }
        });
    }
    render()
    {
        const {title , qty , price} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize : 25}}> {title}</div>
                    <div style={{color : '#777'}}> Rs. {price}</div>
                    <div style={{color : '#777'}}> Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {Buttons} */}
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png" alt = "increase" onClick={this.increaseQuantity}/>
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" alt = "decrease" onClick={this.decreaseQuantity}/>
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/2907/2907762.png" alt = "delete"/>
                    </div>
                </div>
            </div>
        );
    }
}
const styles = {
    image:{
        height : 110,
        width : 150,
        borderRadius : 4,
        background : '#ccc'
    }
}

export default CartItem;