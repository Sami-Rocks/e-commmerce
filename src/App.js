import cart from './Assets/svg/add_to_cart.svg';
import './App.css';
import { Products } from './components/Products';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="header">
          <div className="logo">
            SamiLogo
          </div>
          <div className="cart">
            <img src={cart} alt='cart'/>
          </div>
        </div>
  
        <div className="main-content" >
          <div className="product-list" >
            <h2>Shop</h2>
            <Products />
          </div>
        </div>
  
      </div>
    );
  }
}

export default App;
