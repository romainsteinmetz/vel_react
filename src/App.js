import React, { Component } from 'react';
import Product from './Product/Product.js';
import { fromJS } from 'immutable';
import './App.css';
import '../public/DetailVar';
import Cart from './Cart/Cart'

class App extends Component {
  render() {
    if (typeof window.DetailVar === 'object') {
      let jsVars = fromJS(window.DetailVar);
      //let message = jsVars.get('message');
      let products = jsVars.get('products');

      var prodRows = [];
      products.forEach((product) => {
        prodRows.push(<Product product={product} key={product.get('id')} />);
      });

      return (
        <div className="App">
          {prodRows}
          <Cart />
        </div>
        );
    }
  }
}

export default App;
