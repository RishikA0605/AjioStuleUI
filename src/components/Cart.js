import React from "react";
import { useSelector } from "react-redux";
import { clearItems } from "../store/CartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.CartItems);
  const dispatch = useDispatch();
  const clearCartHandler=()=>{
dispatch(clearItems());
  }
  return (
    <div className="max-w-5xl mx-auto mt-12 px-4 mb-20 bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
      <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-8">
        <h1 className="font-extrabold text-3xl text-slate-900 tracking-tight">Shopping Cart <span className="text-gray-400 text-2xl font-semibold">({cartItems.length})</span></h1>
        {cartItems.length > 0 && (
           <button
             className="text-red-500 font-semibold hover:text-red-700 bg-red-50 hover:bg-red-100 px-5 py-2 rounded-xl transition-colors duration-200 shadow-sm"
             onClick={clearCartHandler}
           >
             Clear Cart
           </button>
        )}
      </div>

      {cartItems.length === 0 ? (
         <div className="text-center py-24">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-200 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 className="text-3xl font-bold text-gray-400 mb-4 tracking-tight">Your cart is feeling empty</h2>
            <p className="text-gray-500 mb-8">You haven't added any premium products yet.</p>
         </div>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6 bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-all duration-300">
              <div className="w-32 h-32 bg-white rounded-xl flex-shrink-0 flex items-center justify-center p-4 mix-blend-multiply border border-gray-100 shadow-sm">
                <img className="max-w-full max-h-full object-contain" src={item.image} alt={item.title}></img>
              </div>
              <div className="flex flex-col flex-1">
                <h2 className="font-bold text-xl text-slate-900 mb-2 line-clamp-2">{item.title}</h2>
                <div className="flex items-center gap-1 mb-2">
                   <span className="text-yellow-400 text-sm">★</span>
                   <span className="text-sm font-semibold text-gray-600">{item?.rating?.rate}</span>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed pr-8">{item.description}</p>
                <div className="mt-auto flex items-center justify-between">
                   <p className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Cart;
