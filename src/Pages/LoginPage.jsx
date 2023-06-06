import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthProvider";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function LoginPage()
{
    const [myEmail,setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
const [lastName,setLastname] = useState("");
const [confirmPass,setConfirmPass] = useState("");
    const [myPassword,setPassword] = useState({
        password: "",
        showPassword: false,
    });
    const [showLogin,setShowLogin] = useState(true);
    const {handleSubmit,handleSignUp,isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const Submit = () =>
    {
        handleSubmit(myEmail,myPassword.password);
    }
    const handleLogin = (getValue) =>
    {
        setShowLogin(getValue);
    }
    const signUpSubmit = () =>
    {
        if(myPassword.password!==confirmPass)
        {
            let conpass = document.getElementById("confirmPass");
            conpass.setCustomValidity("Not matched.")
        }
        handleSignUp(myEmail,myPassword,firstName,lastName);
    }
    
    
    
    return(
        <>
        {!isLoggedIn ?
        <div>
        <div>
            <button onClick={()=>handleLogin(true)}>Login</button>
            <button onClick={()=>handleLogin(false)}>Sign Up</button>
        </div>
        {showLogin ? 
        <div>
            <label>Email<input type="email" placeholder="Enter Email" value={myEmail} onChange={(e) => setEmail(e.target.value)}/></label>
            <br/>
            <label>Password</label>
           <div class="INPpassword"> <input type={myPassword.showPassword ? "text" : "password"} placeholder="Enter password" value={myPassword.password} onChange={(e) => setPassword({...myPassword,password: e.target.value})}
            /><i onClick={()=>setPassword({...myPassword,showPassword:!myPassword.showPassword})} class={myPassword.showPassword ? "fa-eye-slash" :"far fa-eye"} id="togglePassword"></i></div>
            <br />
            <button onClick={()=>Submit()}>Login</button>
        </div> :
        <div>
        <label>Email<input type="email" placeholder="Enter Email" value={myEmail} onChange={(e) => setEmail(e.target.value)}/></label>
        <br/>
        <label>First Name<input type="text" placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></label>
            <br/>
            <label>Last Name<input type="text" placeholder="last name" value={lastName} onChange={(e) => setLastname(e.target.value)} /></label>
            <br />
            <label>Password<input type="password" placeholder="Enter password" value={myPassword} onChange={(e) => setPassword({...myPassword,password: e.target.value})}/></label>
        <br />
            <label>Confirm Password<input type="password" placeholder="Enter password" id="confirmPass" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} /></label>
        <br />
        <button onClick={()=>signUpSubmit()}>SignUp</button>
    </div>
}
</div>: 
<div>
    <h3>You are logged in!</h3>
    <button onClick={()=>setIsLoggedIn(false)}>Logout</button></div>
}
<ToastContainer/>
        </>
    )
}