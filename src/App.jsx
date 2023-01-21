import React from 'react';
import './App.css';
import Header from './component/Header';
import { Route , Switch } from 'react-router-dom';
import Cart from './Page/Cart';
import Photos from './Page/Photos';
import Order from './Page/Order';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
        <Photos/>
           </Route>

        <Route exact path="/cart">
         <Cart/>
           </Route>
        <Route  path="/cart/order">
         <Order/>
           </Route>
      </Switch>
    </>
  );
}

export default App;
