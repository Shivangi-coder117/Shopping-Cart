import React from 'react';

const CartItem = (props) => {
        const{price,title,qty}=props.product;
        const {
            product, 
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
            }=props;
        return (
            <div className="cart-item">
               <div className="left-block">
                   <img style={styles.image}/>
               </div>  
               <div  className="right-block">
                   <div style = { { fontSize: 25 } }>{title}</div>
                   <div style = { { color : '#777' } }>Rs {price}</div>
                   <div style = { { color : '#777' } }>Qty : {qty}</div>
                   <div className="cart-item-actions">
                       {/* Buttons */}
                       <img 
                       alt ="increase" 
                       className='action-icons' 
                       src='https://cdn-icons.flaticon.com/png/128/3303/premium/3303893.png?token=exp=1644229074~hmac=52f8d1f5200134274d7f65cabe562512' 
                 
                  onClick={()=>onIncreaseQuantity(product)}
                       />
                       <img 
                       alt ="decrease" 
                       className='action-icons' 
                       src='https://cdn-icons-png.flaticon.com/128/1828/1828906.png'
                       onClick={() => onDecreaseQuantity(product)}
                       />
                       <img
                        alt ="delete" 
                        className='action-icons'
                        src='https://cdn-icons.flaticon.com/png/128/484/premium/484611.png?token=exp=1644229142~hmac=66693c290ff0bfec41dafe0dfb942cca'
                        onClick={() => onDeleteProduct(product.id)}
                        />
                   </div>

               </div>
            </div>
        );
    
}
const styles = {
    image : {
      height : 110,
      width : 110,
      borderRadius : 4,
      background : '#ccc'
  
    }
  }

export default CartItem;