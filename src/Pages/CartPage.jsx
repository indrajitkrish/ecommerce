import { useContext} from "react";
import {Link} from "react-router-dom";
import { CartContext} from "../Context/CartProvider"
import { WishListContext } from "../Context/WishListProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Context/AuthProvider";


export function CartPage()
{  
  const {isLoggedIn} =  useContext(AuthContext);
    const {getCart,handleDeleteToCart} = useContext(CartContext);
    const {handleAddToWishlist} = useContext(WishListContext);
    const quantityCount = getCart.reduce((total,{quantity})=> total+=Number(quantity)-1,0);
    const totalPrice = getCart.reduce((total,{price})=> total+=Number(price),0);
    const GST= (5*totalPrice)/100;
    //console.log(totalPrice);
    //console.log(quantityCount);
    console.log(getCart);
    const handleQuantity = (getId,car)=>
    {
      console.log(car.quantity);
      if(getId === "qty-inc")
      {
         car.quantity++;
      }
      else{
        car.quantity--;
      }
    }
    const notify = (prod) =>
    {
      toast.error("Product removed from Cart");
      handleDeleteToCart(prod)
    }
    const notify1 = (prod) =>
    {
        if(!prod.wishlist)
        toast.success("Product added to your Wishlist");
        else
        toast.error("Product removed from your Wishlist");
       
        handleAddToWishlist(prod);
    }
    
    return(
        <>
        {isLoggedIn ?
        <div>
          {getCart.length>0 ? getCart.map((cart) => (
            <div class="cartDetails-div">
            <div class="cartImageDetails-div">
            <img class="cartDetailsimage" src={cart?.image} alt="title"/>
            </div>
            <div>
            <h3>{cart?.title}</h3>
            <p>$ {cart?.price}</p>
            <p>{cart?.category}</p>
            <button id="qty-dec" onClick={(e)=>handleQuantity(e.target.id,cart)}>-</button>
            <span>{cart?.quantity}</span>
            <button id="qty-inc" onClick={(e)=>handleQuantity(e.target.id,cart)}>+</button>
            {!cart.cart ? <button>Add to cart<i class="fa fa-shopping-cart" title="Cart"></i></button>
            : <Link to="/cart"><button onClick={()=>notify(cart)}>Remove from cart<i class="fa fa-shopping-cart" title="Cart"></i></button></Link>}
            {!cart.wishlist ? <button onClick={()=>notify1(cart)}>Add to Wishlist<i class="fa fa-heart-o" title="heart"></i></button>
            : <button onClick={()=>notify1(cart)}><i class="fa fa-heart-o" title="heart"></i>Added to wishlist</button>}
            </div>
          </div>    
          )): <div>
            <h3>Your shopping cart is empty.</h3>
            <p>Please add something soon, carts have feelings too.</p>
            </div>
}
<div class="">
<p>Billing Details</p>
<p>Cart Total({getCart.length+quantityCount}) <span>{totalPrice}</span></p>
<p>GST<span>{GST}</span></p>
<p>Shipping Charges<span>FREE</span></p>
<p>Total Amount<span>{totalPrice+GST}</span></p>
<Link to="/checkout"><button>check Order</button></Link>
</div>
</div>:<div>
  <p>Click here to login to view the cart</p><Link to="/login"><button>Login</button></Link>
</div> }
<ToastContainer />
        </>
    )
}