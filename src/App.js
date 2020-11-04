import React, { Component } from 'react';
import cart from './Assets/svg/add_to_cart.svg';
import { Products } from './components/Products';
import data from './Assets/data.json'
import Fade from 'react-reveal/Reveal'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      products: data.products
    }
  }

  render(){
    return (
      <div className="App">
        <Fade cascade>
          <div className="header">
            <div className="logo">
              SamiLogo
            </div>
            <div className="cart">
              <img src={cart} alt='cart'/>
            </div>
          </div>
        </Fade>
  
        <div className="main-content" >
          <div className="shop">
            <h2>Shop</h2>
            <div className="product-list" > 
              <Products products={this.state.products}  />
            </div>
          </div>
          <div className="cart" >
            <h2>Cart</h2>
          </div>
        </div>
  
      </div>
    );
  }
}

export default App;
