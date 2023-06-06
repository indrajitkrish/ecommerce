import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { ProductProvider } from "./Context/ProductProvider";
import { CartProvider } from "./Context/CartProvider";
import { WishListProvider } from "./Context/WishListProvider";
import { AuthProvider } from "./Context/AuthProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
      <AuthProvider>
    <CartProvider>
    <WishListProvider>
    <App />
    </WishListProvider>
    </CartProvider>
    </AuthProvider>
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
