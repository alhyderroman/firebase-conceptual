import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Home = () => {
    const user=useContext(AuthContext);
    console.log(user)
   
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-3xl">This is home page</h1>
                    </div>
    );
};

export default Home;