import React from "react";
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1>Shopping cart</h1>
        <p className="muted">
          Small demo of <code>useReducer</code> with actions, reducer and
          initial state.
        </p>
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
