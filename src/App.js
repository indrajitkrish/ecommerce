

import "./App.css";
//import logo from "./logo.png";
import Mockman from "mockman-js";
import {Routes, Route, Link} from "react-router-dom";
import { HomePage } from "./HomePage";
import { ProductListingPage } from "./Pages/ProductListingPage";
import { ProductDetailsPage } from "./Pages/ProductDetailsPage";
import { CartPage } from "./Pages/CartPage";
import {WishListPage} from "./Pages/WishListPage";
import { LoginPage } from "./Pages/LoginPage";
import { CheckOutPage } from "./Pages/CheckOutPage";
import { useContext, useState } from "react";
import { ProductContext } from "./Context/ProductProvider";
function App() {
  const [getSearch,setSearch] = useState("");
  const {dispatch} = useContext(ProductContext);
  return (
    <div className="App">
      <div class="nav-bar">
            <div>
            <Link to="/productlist" style={{textDecoration: "none"}}><span class="Main-title">MF Store</span></Link>
            </div>
            <div class="search-container">
      <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Search.." name="search"/>
      <Link to="/productlist"><button type="submit" onClick={()=>dispatch({type:"search", payload:getSearch})}><i class="fa fa-search"></i></button></Link>
  </div>
  <div class="nav-bar-right">
    <Link to="/login"><button>Login</button></Link>
  <Link to="/wishlist"><i class="fa fa-heart" title="heart"></i></Link>
  <Link to="/cart"><i class="fa fa-shopping-cart" title="Cart"></i></Link>
  </div>
  </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/productlist" element={<ProductListingPage/>}></Route>
        <Route path="/productlist/:productId" element={<ProductDetailsPage/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path="/wishlist" element={<WishListPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route path="/checkout" element={<CheckOutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
