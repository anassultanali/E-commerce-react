import { Navigate, useLocation } from "react-router";
import Home
 from "../pages/home/Home";
const AuthCheck = ({childeren}) => {
    
    const isAuthenticate = true ;
    const location = useLocation();

    if (!isAuthenticate) {
        return <Navigate to='Auth/Login' state={
            {
                from: location
            }
        } />
    }

    return <Home  /> ;
}

export default AuthCheck ;

