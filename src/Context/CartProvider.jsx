import { createContext, useContext, useState } from "react"
import { ProductContext } from "./ProductProvider";

//import { WishListContext } from "./WishListProvider";
//import { useParams } from "react-router-dom";


export const CartContext = createContext();
export function CartProvider({children})
{
  const {getProducts,setGetProducts} = useContext(ProductContext);
  //const {getWishList,setGetWishlist} = useContext(WishListContext);
  const handleAddToCart = async(product) =>
  {
   //const product = item;
   product.cart = !product.cart;
   
  setGetProducts(getProducts.map((prod)=> {
   if(prod._id === product._id)
   {
     //console.log(prod);
    return{...prod,cart:product.cart};
   }
    
    return {...prod};
 }))
 /*setGetWishlist(getWishList.map((prod)=> {
  if(prod._id === product._id)
  {
    //console.log(prod);
   return{...prod,wishlist:product.wishlist};
  }
   return {...prod};
}))*/
//console.log(getCart);
 //console.log(getProducts);
   try{
     const postProduct = {product}; 
     const response = await fetch("/api/user/cart",{
       method: 'POST',
       headers : {authorization : localStorage.getItem('encodedToken')},
body: JSON.stringify(postProduct)
     })
console.log(await response.json())
//console.log(getCart);
   } 
   catch(error)
   {
     console.log(error);
   } 
   const fetchData = async() =>
   {
       try{
           const response = await fetch("/api/user/cart",{
               method: 'GET',
       headers : {authorization : localStorage.getItem('encodedToken')}
           })
         //console.log(JSON.parse(response._bodyInit).cart);
         setGetCart(JSON.parse(response._bodyInit).cart);
       }
       catch(error)
       {
   console.log(error);
       }
   }
   fetchData();
  }
  const handleDeleteToCart = async(product) =>
    {
      product.cart = !product.cart;
   console.log(product._id);
  setGetProducts(getProducts.map((prod)=> {
   if(prod._id === product._id)
   {
     //console.log(prod);
    return{...prod,cart:product.cart};
   }
    
    return {...prod};
 }))
      try{
        const response = await fetch(`/api/user/cart/${product._id}`,{
          method : 'DELETE',
          headers : {authorization : localStorage.getItem('encodedToken')},
        })
        console.log(await response.json())
      }
      catch(error)
      {
        console.log(error);
      }
      const fetchData = async() =>
   {
       try{
           const response = await fetch("/api/user/cart",{
               method: 'GET',
       headers : {authorization : localStorage.getItem('encodedToken')}
           })
         //console.log(JSON.parse(response._bodyInit).cart);
         setGetCart(JSON.parse(response._bodyInit).cart);
       }
       catch(error)
       {
   console.log(error);
       }
   }
   fetchData();
    }

    const [getCart, setGetCart ] = useState([]);
    return(
        <CartContext.Provider value={{getCart,setGetCart,handleAddToCart,handleDeleteToCart}}>
            {children}
        </CartContext.Provider>
    )
}