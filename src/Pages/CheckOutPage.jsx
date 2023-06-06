import { useContext} from "react"
import { AuthContext } from "../Context/AuthProvider"
import { CartContext } from "../Context/CartProvider";


export function CheckOutPage()
{
    const {address} = useContext(AuthContext);
    const {getCart} = useContext(CartContext);
    const quantityCount = getCart.reduce((total,{quantity})=> total+=Number(quantity)-1,0);
    const totalPrice = getCart.reduce((total,{price})=> total+=Number(price),0);
    const GST= (5*totalPrice)/100;
    return(
        <>
        <div>
            <h3>Address Details</h3>
            {address.map(({user,add,pin}) => 
            <div>
            <label for="user" id="addr"><input type="radio" id="user" />
            <h3>{user}</h3>
            <p>{add}</p>
            <p>{pin}</p>
</label><br/>
            </div>
)}
        </div>
        <div class="">
<p>Billing Details</p>
<p>Cart Total({getCart.length+quantityCount}) <span>{totalPrice}</span></p>
<p>GST<span>{GST}</span></p>
<p>Shipping Charges<span>FREE</span></p>
<p>Total Amount<span>{totalPrice+GST}</span></p>
<button>Confirm Order</button>
</div>
        </>
    )
}