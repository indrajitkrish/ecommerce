
import { useContext } from "react";
import {Link} from "react-router-dom";
import { ProductContext } from "./Context/ProductProvider";
import CarouselPage from "./Pages/CarouselPage";

export function HomePage(){
  
const {dispatch} = useContext(ProductContext);
    return(
        <>
        <div class="carosel">
<CarouselPage />
        </div>
        <div class="category-div">
        <h2>Category</h2>
        <div class="category-conatiner">
            <div  class="category1">
             <Link to="/productlist"><img onClick={(e)=>dispatch({type:"category", payload:"upperWear"})} class="category-image" src="../Assets/T-shirt1.jpg" alt="T-shirt"/></Link>
              <h3 class="category-text">T shirt</h3>
            </div>
            <div class="category1">
            <Link to="/productlist"><img onClick={(e)=>dispatch({type:"category", payload:"bottomWear"})} class="category-image" src="../Assets/Pant1.jpg" alt="T-shirt"/></Link>
            <h3 class="category-text">Pants</h3>
            </div>
            <div class="category1">
            <Link to="/productlist"><img onClick={(e)=>dispatch({type:"category", payload:"footWear"})} class="category-image" src="../Assets/shoe1.jpg" alt="T-shirt"/></Link>
            <h3 class="category-text">Footwear</h3>
            </div>
        </div>
        </div>
        </>
    )
}