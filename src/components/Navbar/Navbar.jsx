import { Check, Info } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
    return(
        <div className="navbar_top bg-[#272343] h-[45px] w-full flex items-center  ">
            <div className="container ">
                <div className="flex items-center justify-between ">
                
                        <p className="flex  gap-2 text-sm font-inter font-normal text-white "><Check /> Free all orders over 50$ </p>
                    
                    <div className="navbat_top_right ">
                        <select defaultValue='server location' className="font-inter ">
                            <option className="">English</option>
                            <option className="">العربية</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar ;

