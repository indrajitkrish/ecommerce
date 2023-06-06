import { useContext } from "react"
import {Link} from "react-router-dom";
import { WishListContext} from "../Context/WishListProvider"
import { CartContext } from "../Context/CartProvider";
import { AuthContext } from "../Context/AuthProvider";


export function WishListPage()
{
    const {getWishList} = useContext(WishListContext);
    const {handleDeleteToCart} =  useContext(CartContext);
    const {handleAddToWishlist} = useContext(WishListContext);
    const {isLoggedIn} = useContext(AuthContext);
    return(
        <>
        {
          isLoggedIn ?
          <div>
          { getWishList.map((wishlist) => (
            <div class="productDetails-div">
            <div class="proImageDetails-div">
            <img class="productDetailsimage" src={wishlist?.image} alt="title"/>
            <span class="wishlist-heart"><i class="fa fa-heart-o" ></i></span>
            </div>
            <div>
            <h3>{wishlist?.title}</h3>
            <hr/>
            <p>{wishlist?.category}</p>
            <p>$ {wishlist?.price}</p>
            {!wishlist.cart ? <button>Add to cart<i class="fa fa-shopping-cart" title="Cart"></i></button>
            : <Link to="/cart"><button onClick={()=>handleDeleteToCart(wishlist)}>Remove from cart<i class="fa fa-shopping-cart" title="Cart"></i></button></Link>}
            {!wishlist.wishlist ? <button onClick={()=>handleAddToWishlist(wishlist)}>Add to Wishlist<i class="fa fa-heart-o" title="heart"></i></button>
            : <button onClick={()=>handleAddToWishlist(wishlist)}><i class="fa fa-heart-o" title="heart"></i>Remove from wishlist</button>}
            </div>
          </div>   
          )) 
        }
        </div>:
        <div>
          <h3>Your wishlist is lonely and looking for love.</h3>

<p>Add products to your wishlist, review them anytime and easily move to cart.</p>
<Link to="/productlist"><button>Continue shopping</button></Link><Link to="/login"><button>Login</button></Link>
        </div>
      }
        </>
    )
}