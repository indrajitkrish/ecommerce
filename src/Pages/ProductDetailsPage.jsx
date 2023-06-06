import {  useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import { CartContext } from "../Context/CartProvider";
import { WishListContext } from "../Context/WishListProvider";
import { ProductContext } from "../Context/ProductProvider";
//import { ProductContext} from "../Context/ProductProvider";



export function ProductDetailsPage(){


    const {productId} = useParams();
    const [productDet, setProductDet] = useState([]);
    const {getProducts} =  useContext(ProductContext);
    const {handleAddToCart} = useContext(CartContext);
    const {handleAddToWishlist} = useContext(WishListContext);
    


   /*const fetchData = async () => {
        try {
          const response = await fetch(`/api/products/${productId}`);
          //console.log(JSON.parse(response._bodyInit));
          //console.log(JSON.parse(response._bodyInit).products);
          //console.log(response);
          console.log(JSON.parse(response._bodyInit).product)
          setProductDet(JSON.parse(response._bodyInit).product);
    
        } catch (error) {
          console.log(error);
        }
      }

    useEffect(() => {
       fetchData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);*/
      const newProduct = async() =>
      {
      setProductDet(getProducts.find((prod)=> prod._id=== productId));
      }
      useEffect(() => {
        newProduct()
       // eslint-disable-next-line react-hooks/exhaustive-deps
       },[]);
console.log(productDet);
    return(
        <>
        {
          <div class="productDetails-div">
            <div class="productImage-div">
            <img class="productDetailsimage" src={productDet.image} alt="title"/>
            <span class="heart"><i class="fa fa-heart-o" ></i></span>
            </div>
            <div>
            <h3>{productDet.title}</h3>
            <hr/>
            <p>{productDet.category}</p>
            <p>$ {productDet.price}</p>
            {!productDet.cart ? <button onClick={()=>handleAddToCart(productDet)}>Add to cart<i class="fa fa-shopping-cart" title="Cart"></i></button>
            : <Link to="/cart"><button>Go to cart<i class="fa fa-shopping-cart" title="Cart"></i></button></Link>}
            {!productDet.wishlist ? <button onClick={()=>handleAddToWishlist(productDet)}>Add to Wishlist<i class="fa fa-heart-o" title="heart"></i></button>
            : <button onClick={()=>handleAddToWishlist(productDet)}><i class="fa fa-heart-o" title="heart"></i>Added to wishlist</button>}
            </div>
          </div>
}
        </>
    )
}