import React from 'react';
import './App.css';
import Header from './component/Header';
import { Route , Switch } from 'react-router-dom';
import Cart from './Page/Cart';
import Photos from './Page/Photos';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
        <Photos/>
           </Route>

        <Route  path="/cart">
         <Cart/>
           </Route>
      </Switch>
    </>
  );
}

export default App;
