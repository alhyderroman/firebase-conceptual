import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation,useNavigate } from "react-router-dom";

const Login = () => {
    const {logInUser,googleLogin,setUser,facebookLogin,user}=useContext(AuthContext);
   const location=useLocation();
   const navigate=useNavigate();
   console.log(location);
    const handleLogin=e=>{
        e.preventDefault();
   
        const email=e.target.email.value;
        const password=e.target.password.value;
        logInUser(email,password);
         
    }

    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>setUser(result.user))
    }

    const handlefacebookLogin=()=>{
        facebookLogin()
        .then(result=>setUser(result.user))
    }

    useEffect(()=>{
        if(user){
            navigate(location.state)
        }

    },[user])

    return (
        <div className="w-2/5 min-w[500px] mx-auto border-2 border-red-500 rounded-xl">
        <form onSubmit={handleLogin}>
        
            <div>
                <p>Email:</p>
                <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full mb-4 " required />
            </div>
            <div>
                <p>Password:</p>
                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full mb-4" required />
            </div>
           
            <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>
        <button onClick={handleGoogleLogin} className="btn btn-secondary">Google login</button>
        <button onClick={handlefacebookLogin} className="btn btn-secondary">facebook login</button>
    </div>
    );
};

export default Login;