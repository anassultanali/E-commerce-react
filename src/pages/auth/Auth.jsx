import { Outlet } from "react-router";

const Auth = () => {
    return(
        <div className="text-red-500">
            Auth Page
            
             
            <Outlet/>
        </div>

    )
}

export default Auth ;

