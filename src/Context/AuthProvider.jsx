import { createContext, useState } from "react"
import { toast } from "react-toastify";

export const AuthContext = createContext();
export function AuthProvider({children})
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [address,setAddress] = useState([
        {
        user:"Indrajit S",
        add:"605, cpp street, Thanjavur",
        pin:"614904"
        }]
    )
    const handleSubmit = async(myEmail,myPassword) =>
    {
        try{
            const creds={
                email : myEmail,
                password: myPassword
            }
const res = await fetch("/api/auth/login",{
    method: 'POST',
body: JSON.stringify(creds)
})
const {encodedToken} = await res.json()
console.log(encodedToken)
localStorage.setItem("encodedToken",encodedToken)
if(!(localStorage.getItem("encodedToken")==="undefined"))
{
    //console.log("token coming");
setIsLoggedIn(true);
}
else{
    if(myEmail.length <=0)
    toast.error("Please enter valid Email Id" );
    else if(myPassword.length <=0)
    toast.error("Please enter Password");
}

        }
        catch(error)
        {
            toast.error("Please enter valid Email and password");
            console.log(error);
        }
    }
    
    const handleSignUp = async(email,password,fname,lname) =>
    {
        try {
            const creds={
                email : email,
                password: password, 
                firstname: fname,
                lastname: lname
            }
            const res = await fetch("/api/auth/signup",{
                method: 'POST',
            body: JSON.stringify(creds)
            })
            const {encodedToken} = await res.json()
            console.log(encodedToken);
if(encodedToken!=="")
setIsLoggedIn(true);

localStorage.setItem("encodedToken",encodedToken)

        }
        catch(error)
        {
            toast.error("Please fill all the required fields");
            console.log(error);
        }
    }
    return(
        <AuthContext.Provider value={{handleSubmit, isLoggedIn, isSignUp,setIsLoggedIn,setIsSignUp,
        handleSignUp,address,setAddress}}>
            {children}
        </AuthContext.Provider>
    )
}