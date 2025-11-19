# React useReducer Shopping Cart sample

This is a minimal React app that demonstrates how to use `useReducer` to
manage the state of a simple shopping cart.

## Features

- **Add Items**: Add predefined products (Apple, Banana, Orange) to the cart.
- **Quantity Aggregation**: Adding the same item multiple times increases its quantity instead of creating duplicates.
- **Total Calculation**: Automatically calculates the total price of items in the cart.
- **Clear Cart**: Remove all items from the cart with a single click.
- **Persistent IDs**: Uses static IDs for products to ensure correct aggregation.

## How to run

1. Make sure you have **Node.js 18+** installed.
2. Unzip this project.
3. In a terminal, go to the project folder and run:

   ```bash
   npm install
   npm start
   ```

4. Your browser should automatically open at `http://localhost:3000`.

## Verification

Here is a video demonstrating the application functionality:

![Verification Video](verification.webp)
