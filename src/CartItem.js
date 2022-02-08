import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price : 999,
            title : 'Phone',
            qty : 1,
            img : ''
        };    
    }
        increaseQuantity=()=>{
         // console.log('this',this.state);
          //setState form 1
          //this.setState({

            //qty: this.state.qty +1
          //});
          //setState form 2
          this.setState((prevState) => {
              return {
                 qty : prevState.qty +1
              }
          },()=>
          {
              console.log('this.state',this.state);
          });
        }
          decreaseQuantity= () =>{
             const {qty} = this.state;
             if(qty === 0){
             return;
             }
             //setState form 2
             this.setState((prevState) => {
                 return {
                    qty : prevState.qty - 1
                 }
             });
          }
        
    render() {
        const{price,title,qty}=this.state;
        return (
            <div class ="cart-item">
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
                       onClick={this.increaseQuantity}
                       />
                       <img 
                       alt ="decrease" 
                       className='action-icons' 
                       src='https://cdn-icons-png.flaticon.com/128/1828/1828906.png'
                       onClick={this.decreaseQuantity}
                       />
                       <img
                        alt ="delete" 
                        className='action-icons'
                         src='https://cdn-icons.flaticon.com/png/128/484/premium/484611.png?token=exp=1644229142~hmac=66693c290ff0bfec41dafe0dfb942cca'
                         />
                   </div>

               </div>
            </div>
        );
    }
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