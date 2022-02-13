import React from 'react';
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            prducts :[{
                price : 99,
            title : 'Watch',
            qty : 1,
            img : ''

            },{
            price : 999,
            title : 'Phone',
            qty : 10,
            img : ''
            },
            {
                price : 999,
            title : 'Laptop',
            qty : 4,
            img : ''
            }
        ]
        }
        this.testing(); 
    }
    testing(){
        const promise = new Promise((resolve,reject)=>{
            setTimeout(() =>{
                resolve('done');
            },5000);
        
    })
}
    render(){
        const{ products } = this.state;
       
        return (
            <div className='cart'>
                <CartItem  qty={1} price ={99} title={"Watch"} img ={''}/>
                {products.map((product)=>{
                    return <CartItem product={product}/>
                })}
                
            </div>
        );
    }
  }

export default Cart;