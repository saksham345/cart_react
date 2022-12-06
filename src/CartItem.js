import React from 'react';
import './index.css'

class CartItem extends React.Component{
    render()
    {
        // const {title , qty , price} = props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize : 25}}> Phone</div>
                    <div style={{color : '#777'}}> Rs. 999</div>
                    <div style={{color : '#777'}}> Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* {Buttons} */}
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