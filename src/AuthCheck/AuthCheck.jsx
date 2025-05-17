import { Navigate, useLocation } from "react-router";

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

    return childeren ;
}

export default AuthCheck ;

