import { createContext, useState, useContext} from "react"
import { ProductContext } from "./ProductProvider";
//import { CartContext } from "./CartProvider";


export const WishListContext = createContext();
export function WishListProvider({children})
{
    const {getProducts,setGetProducts} = useContext(ProductContext);
    const [getWishList, setGetWishlist ] = useState([]);
    //const {getCart,setGetCart} = useContext(CartContext);
    const handleAddToWishlist = async(product) =>
   {
      product.wishlist = !product.wishlist;
      const checkWishList = product.wishlist;
      console.log(checkWishList);
      setGetProducts(getProducts.map((prod)=> {
        if(prod._id === product._id)
        {
          //console.log(prod);
         return{...prod,wishlist:product.wishlist};
        }
         return {...prod};
      }))
     /* setGetCart(getCart.map((prod)=> {
        if(prod._id === product._id)
        {
          //console.log(prod);
         return{...prod,wishlist:product.wishlist};
        }
         return {...prod};
      }))
      console.log(getCart);*/
      //console.log(checkWishList);
    if(checkWishList)
    {
    try{
      const postProduct = {product}; 
      const response = await fetch("/api/user/wishlist",{
        method: 'POST',
        headers : {authorization : localStorage.getItem('encodedToken')},
body: JSON.stringify(postProduct)
      })
console.log(await response.json())
    } 
    catch(error)
    {
      console.log(error);
    }
  }
  else{
    try{
      const response = await fetch(`/api/user/wishlist/${product._id}`,{
        method : 'DELETE',
        headers : {authorization : localStorage.getItem('encodedToken')},
      })
      console.log(await response.json())
    }
    catch(error)
    {
      console.log(error);
    }
  }
    const fetchData = async() =>
    {
        try{
            const response = await fetch("/api/user/wishlist",{
                method: 'GET',
        headers : {authorization : localStorage.getItem('encodedToken')}
            })
          //console.log(JSON.parse(response._bodyInit).wishlist);
          setGetWishlist(JSON.parse(response._bodyInit).wishlist);
        }
        catch(error)
        {
    console.log(error);
        }
    }
    fetchData();
    /*const fetchData1 = async() =>
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
   fetchData1();*/
   }
    return(
        <WishListContext.Provider value={{getWishList,setGetWishlist,handleAddToWishlist}}>
            {children}
        </WishListContext.Provider>
    )
}