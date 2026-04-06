import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Light");

  const cartItems = useSelector((store) => store.cart.CartItems);
  console.log("i have cart ", cartItems);

  const user = useContext(UserContext);
  //1st case: [] -> empty array dependency -> only once called when navbar render
  //2nd case: -> (no array dependency)jab jab navbar render hoga tab apna useeffect bhi render hoga
  //3rd case: jab hm array dependency k andr pass krte h toh w change hota hai toh render hota h
  useEffect(() => {
    console.log("useeffect called");
  }, []);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center gap-2">
        <h1 className="font-extrabold text-3xl tracking-tight bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform cursor-pointer">
          <Link to="/">AJIO</Link>
        </h1>
      </div>
      <ul className="flex items-center space-x-8 text-gray-600 font-medium text-sm tracking-wide">
        <li>
          <Link
            className="relative group hover:text-purple-600 transition-colors duration-300"
            to="/Men"
          >
            MEN
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            className="relative group hover:text-purple-600 transition-colors duration-300"
            to="/Women"
          >
            WOMEN
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            className="relative group hover:text-purple-600 transition-colors duration-300"
            to="/Kid"
          >
            KIDS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            className="relative group hover:text-purple-600 transition-colors duration-300 flex items-center gap-1"
            to="/Cart"
          >
            <span>CART</span>
            {cartItems.length > 0 && (
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg transform -translate-y-2">
                {cartItems.length}
              </span>
            )}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full text-transparent">
              _
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="relative group hover:text-purple-600 transition-colors duration-300"
            to="/Grocery"
          >
            GROCERY
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
         <li>
          <Link
            className="relative group hover:text-purple-600 transition-colors duration-300"
            to="/Login"
          >
            LOGIN
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            className="relative group hover:text-purple-600 transition-colors duration-300"
            to="/About"
          >
            ABOUT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        {user?.name && (
          <li className="text-sm font-semibold bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full border border-gray-200">
            {user.name}
          </li>
        )}

        <button
          className="bg-slate-900 px-6 py-2 rounded-full text-white font-medium shadow-md hover:bg-slate-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all active:scale-95 duration-200"
          onClick={() => {
            btnName === "Light" ? setBtnName("Dark") : setBtnName("Light");
          }}
        >
          {btnName}
        </button>
      </ul>
    </nav>
  );
};
export default Navbar; //default export
