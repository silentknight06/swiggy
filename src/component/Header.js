import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header=()=>{
   const[btnNameReact, setbtnNameReact]=useState("Login");
      const online=useOnlineStatus();

      useEffect(()=>{
         console.log("useeffect called");
      }, [btnNameReact])

     const cartItem=useSelector((store)=>store.cart.items);
      //  console.log(cartItem);


    return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-green-300" >
        <div className="logo-container">
           <img className="w-24 ml-5 mt-5 rounded-md " src={LOGO_URL} />
        </div>
        <div className="flex items-center">
             <ul className="flex p-4 m-4">
               <li className="px-4">Online status:{online? "✅" :"🔴"}</li>
                <li className="px-4 ">
                <Link className="  text-xl hover:text-blue-600" to="/">Home</Link> </li>
                <li className="px-4">
                  <Link  className="   text-xl hover:text-blue-600" to="/about">About</Link>
                </li>
                <li className="px-4">
                   <Link  className=" text-xl hover:text-blue-600" to="/contact">Contact</Link>
                </li>
                <li className="px-4 font-bold"> 
                 <Link  className="text-xl"   to="/cart">Cart - ({cartItem.length})</Link></li>
                <button className="px-2 py-3 -mt-3   bg-black text-white rounded-lg " onClick={()=>{
                    (btnNameReact=="Login")?setbtnNameReact("Logout"):setbtnNameReact("Login");
                }}>
                  {btnNameReact}
                </button>
             </ul>
        </div>
    </div>
    );
   }
   export default Header;