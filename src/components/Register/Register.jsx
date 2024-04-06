import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {

    useEffect(()=>{
        const clear=setInterval(()=>{
            console.log('I am called')
        },1000)

        return ()=>{
            clearInterval(clear)
        }

    },[])






    const { registerUser,setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [emailError,setEmailError]=useState('');




    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password.length < 6) {
            setError('password must be 6 character long');
            return;
        }
       if (password !== confirmPassword) {
            setError('password does not match with confirm password');
            return;
        }

        if(!/\d{2,}$/.test(password)){
            setError('password must end with at least two digits');
            return;
        }
        if(!/[@#%^&*]/.test(password)){
            setError('Please add a special character like @,#,%,^,&,* ')
            return;
        }

        if(!/@gmail\.com$/.test(email)){
            setEmailError('Email must end with @gmail.com')
            return;
        }

        setError('');
        setEmailError('');

        console.log(name, photo, email, password, confirmPassword);
        registerUser(email, password)
        .then(result=>{setUser(result.user)})
        .catch(error=>setError( error.message.split('auth')[1].split(/[-/)]/).join(' ').toUpperCase()))

    }
    return (
        <div className="w-2/5 min-w[500px] mx-auto border-2 border-red-500 rounded-xl">
            <form onSubmit={handleRegister}>
                <div>
                    <p>Name:</p>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full mb-4 " required />
                </div>
                <div>
                    <p>Photo:</p>
                    <input type="text" name="photo" placeholder="Your Photo" className="input input-bordered w-full mb-4" required />
                </div>
                <div>
                    <p>Email:</p>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full  " required />
                </div>
                {
                    emailError&& <small className="text-red-600">{emailError}</small>
                }
                <div>
                    <p>Password:</p>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered w-full mb-4" required />
                </div>
                <div>
                    <p>Confirm Password:</p>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered w-full mb-4" required />
                </div>
                {
                    error && <small className="text-red-500">{error}</small>
                }
                <button type="submit" className="btn btn-primary w-full">Register</button>
            </form>
        </div>
    );
};

export default Register;