import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './../components/Navbar/Navbar';
import  Home  from './../pages/home/Home';
import  Auth  from './../pages/auth/Auth';
import  Login  from './../pages/auth/Login/Login';
import  Register  from './../pages/auth/Register/Register';
import  Error  from './../pages/Error/Error';
  
const MainLayout = () => {
    return(
        <BrowserRouter>
        {/* Navbar */}
        <Navbar/>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="auth" element={<Auth />}>
                <Route path="Login" element={<Login/>} />
                <Route path="Register" element={<Register/>} />
            </Route>

            {/* Not Found Route  */}
            <Route path="*" element={<Error/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default MainLayout ;

