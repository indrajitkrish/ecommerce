import { useContext} from "react";
import { ProductContext} from "../Context/ProductProvider"
import {Link} from "react-router-dom";
import { CartContext } from "../Context/CartProvider";
import { WishListContext } from "../Context/WishListProvider";
import LoadingSpinner from "./LoadingSpinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ProductListingPage()
{

  //const [wishlistColor, setWishlistColor] = useState(false);
    const {dispatch, filterPro, isLoading} = useContext(ProductContext);
    //const {getCart} = useContext(CartContext);
    const {handleAddToCart} = useContext(CartContext);
    const {handleAddToWishlist} = useContext(WishListContext);
   
    const notify = (prod) =>
    {
      toast.success("Product added to your cart successfully");
      handleAddToCart(prod)
    }
    const notify1 = (prod) =>
    {
        if(!prod.wishlist)
        toast.success("Product added to your Wishlist");
        else
        toast.error("Product removed from your Wishlist");
        
        handleAddToWishlist(prod);
    }
    const handleFilter = () =>
    {
      dispatch({type:"clear-filter"});
      let clearInputs = document.querySelectorAll('input');
      clearInputs.forEach(value => value.checked = false)
    }
    
    return(
      <div class="productPage">
        <div class="filter-container">
<h4>Filters</h4>
<br/>
<h4>Price</h4>
<label for="low"><input type="radio" id="low" name="filterPrice" onChange={(e)=>dispatch({type:"sort", payload:e.target.id})} value="lowToHigh"/>
Low to High</label><br/>
<label for="high"><input type="radio" id="high" name="filterPrice" onChange={(e)=>dispatch({type:"sort", payload:e.target.id})} value="HighToLow"/>
High to low</label><br/>
<br/>
<h4>Category</h4>
<input type="checkbox" id="upperWear" onClick={(e)=>dispatch({type:"category", payload:e.target.id})}  value="upperWear"/>
<label for="Tshirt">T shirt</label><br/>
<input type="checkbox" id="bottomWear" onClick={(e)=>dispatch({type:"category", payload:e.target.id})} value="bottomWear"/>
<label for="pant">Pant</label><br/>
<input type="checkbox" id="footWear" onClick={(e)=>dispatch({type:"category", payload:e.target.id})} value="footWear"/>
<label for="shoe">Shoe</label><br/>
<h4>Rating</h4>
<div class="rating-range">
  <p>1⭐</p>
  <p>3⭐</p>
  <p>5⭐</p>
</div>
<input onClick={(e)=>dispatch({type:"rating", payload:e.target.value})} min="0" max="5" defaultValue="0" type="range" />
<div>
<button onClick={()=>handleFilter()}>Clear</button>
</div>
        </div>
        {
          isLoading? <LoadingSpinner /> :
        <div class="product-container">
        {
          filterPro?.map((prod)=>
          <div class="product-div">
            <div class="proImage-div">
            <Link to={`/productlist/${prod._id}`}><img class="productimage" src={prod.image} alt="title"/></Link>
          <span class="wishlist-heart"><i style={{backgroundColor: !prod.wishlist? "white" : "red"}} onClick={()=>notify1(prod)} class="fa fa-heart" ></i></span>
            </div>
            <div>
            <h3>{prod.title}</h3>
            <hr/>
            <p>{prod.category}</p>
            <p>$ {prod.price}</p>
            {!prod.cart ? <button onClick={()=>notify(prod)}>Add to cart<i class="fa fa-shopping-cart" title="Cart"></i></button>
            : <Link to="/cart"><button>Go to cart<i class="fa fa-shopping-cart" title="Cart"></i></button></Link>}
            </div>
          </div>)
        }
        </div>
}
<ToastContainer />

        </div>
    )
}
//onClick={setGetCart(()=> [...getCart,prod])}