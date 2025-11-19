import React, { useReducer } from "react";

const initialCart = {
  items: [],
  total: 0,
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);



function cartReducer(state, action) {
  switch (action.type) {
    case "add_item": {
      const existingItem = state.items.find(
        (item) => item.id === action.item.id
      );
      const updatedItems = existingItem
        ? state.items.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + action.item.quantity }
            : item
        )
        : [...state.items, action.item];
      const newTotal =
        state.total + action.item.price * action.item.quantity;

      return {
        ...state,
        items: updatedItems,
        total: newTotal,
      };
    }
    case "clear_cart": {
      return { items: [], total: 0 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const products = [
    { id: "p1", name: "Apple", price: 1.5 },
    { id: "p2", name: "Banana", price: 0.8 },
    { id: "p3", name: "Orange", price: 1.2 },
  ];

  function handleAddItem(product) {
    dispatch({
      type: "add_item",
      item: {
        ...product,
        quantity: 1,
      },
    });
  }

  return (
    <div>
      <h2>Cart total: {formatCurrency(cart.total)}</h2>
      <div className="buttons">
        {products.map((product) => (
          <button
            key={product.id}
            className="primary"
            onClick={() => handleAddItem(product)}
          >
            Add {product.name}
          </button>
        ))}
        <button
          className="secondary"
          onClick={() => dispatch({ type: "clear_cart" })}
        >
          Clear cart
        </button>
      </div>

      {cart.items.length === 0 ? (
        <p>No items in the cart yet.</p>
      ) : (
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x {formatCurrency(item.price)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;

