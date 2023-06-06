import { createContext, useEffect, useReducer, useState } from "react"


export const  ProductContext = createContext();
export function ProductProvider({children})
{
  const [isLoading, setIsLoading] = useState(false);
  const AppReducer = (result,action) =>
  {
    switch(action.type){
      case "search":
        return {...result, search: action.payload};
      case "sort":
        return {...result, sort: action.payload};
      case "category":
        console.log(result.category.includes(action.payload))
        return {...result, category: result.category.includes(action.payload)?result.category.filter((item)=>item!==action.payload): [...result.category,action.payload]};
      case "rating":
        return {...result, rating: action.payload};
      case "clear-filter":
        return {...result, search:"", sort:"reset", category:[], rating:"0"}
      default:
        console.log("error");
        break;
    }
  }

  const [state, dispatch] = useReducer(AppReducer,{
    search:"",
    sort:"reset",
    category:[],
    rating:"0"
  })
    const [getProducts,setGetProducts] = useState([]);
    const fetchData = async () => {
        try {
          const response = await fetch("/api/products");
          //console.log(JSON.parse(response._bodyInit));
          //console.log(JSON.parse(response._bodyInit).products);
          //console.log(response._bodyInit);
          setGetProducts(JSON.parse(response._bodyInit).products);
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(() => {
      setIsLoading(true);
        setTimeout(()=>
        {
          fetchData();
          setIsLoading(false);
        },3000)
      }, []);

      const filteredData = () =>
      {
      let filteredProduct = getProducts;
      //console.log(filteredProduct);

      filteredProduct = state.search.length > 0 && state.search.length !=="" ? filteredProduct.filter(({category})=>
      category.toLowerCase().includes(state.search.toLowerCase())): filteredProduct;
      //console.log(filteredProduct);

      filteredProduct = [...(state.sort === "low" ? filteredProduct.sort((a,b)=> a.price - b.price): state.sort==="high"?
      filteredProduct.sort((a,b)=> b.price - a.price): filteredProduct)];
      //console.log(filteredProduct);

filteredProduct = state.category.length>0 ? filteredProduct.filter((product)=> state.category.includes(product.categoryName)) :
filteredProduct
console.log(filteredProduct);


      filteredProduct = [...(Number(state.rating) > 0 ? filteredProduct.filter(({rating})=> rating >= Number(state.rating)): filteredProduct)];
      //console.log(filteredProduct);
      return filteredProduct
      }

      let filterPro = filteredData();
     console.log(state);
    return(
        <ProductContext.Provider value={{dispatch,filterPro,getProducts,setGetProducts, isLoading}}>
            {children}
        </ProductContext.Provider>
    )
}