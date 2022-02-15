import React from "react";
import Cart from './Cart';
import Navbar from './Navbar'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products :[
        {
        price : 6000,
        title : 'Watch',
        qty : 1,
        img : 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1.png?v=1640628318',
        id:1

        },
        {
        price : 65000,
        title : 'Phone',
        qty : 10,
        img : 'https://oasis.opstatics.com/content/dam/oasis/page/2021/operation/1217/homepage/mo/02-OnePlus-9.jpg',
        id:2
        },
        {
            price : 999,
        title : 'Laptop',
        qty : 4,
        img : 'https://cdn.thewirecutter.com/wp-content/media/2020/12/macbook-2048px-9-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024',
        id:3

        }
        ]
    }
}

handleIncreaseQuantity = (product)=>{
    console.log('Hey please increase the qty of ',product);
    const {products}= this.state;
    const  index = products.indexOf(product);
    
    products[index].qty +=1;

    this.setState({
         products
})
}
handleDecreaseQuantity = (product)=>{
console.log('Hey please increase the qty of ',product);
const {products}= this.state;
const  index = products.indexOf(product);

if(products[index].qty === 0){
    return;
}
products[index].qty -=1;

this.setState({
     products
})
}
getCartCount = () => {
  const{products} = this.state;
  let count =0;
products.forEach((product) => {
  count += product.qty;
})

  

  return count;
}

getCartTotal = () =>{
   const {products} = this.state;
    
   let cartTotal = 0;

   products.map((product)=> {
    cartTotal = cartTotal + product.qty * product.price
     
   })
   return cartTotal;
}


handleDeleteProduct = (id)=>{
const{products}=this.state;
const items = products.filter((item) => item.id !== id);

this.setState({
    products : items
})
}
  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
         products={products}
         onIncreaseQuantity={this.handleIncreaseQuantity}
         onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style = {{padding : 10, fontSize : 20  }}>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
