import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/sardines">
          <Sardines />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
