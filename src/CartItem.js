import React from 'react';
import './index.css'

class CartItem extends React.Component{
    
    render()
    {
        const {title , qty , price} = this.props.product;
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
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png" alt = "increase" onClick={() => this.props.handleIncreaseQuantity(this.props.product)}/>
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" alt = "decrease" onClick={() => this.props.handleDecreaseQuantity(this.props.product)}/>
                        <img className="action-icons" src="https://cdn-icons-png.flaticon.com/128/2907/2907762.png" alt = "delete" onClick={() => this.props.handleDeleteProduct(this.props.product.id)}/>
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