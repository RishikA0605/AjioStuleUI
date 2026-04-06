import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "./hook/useGetSingleProduct";
import { addItems } from "../store/CartSlice";  
import { useDispatch } from "react-redux";

const ProductDetails =()=>{
    const {productId} = useParams();
    const singleProduct = useGetSingleProduct(productId);
    const dispatch = useDispatch();

   if(singleProduct === null){
    return <Skeleton/>
   }

   if(singleProduct === false){
    return <h2>Product not found</h2>
   }

   const{image, title, description,price}= singleProduct;
  const handleCartItem =()=>{
   //dispatch action to add item in cart
   dispatch(addItems(singleProduct));
  }
    return (
      <div className="max-w-5xl mx-auto mt-12 px-4 mb-20">
         <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 bg-gray-50 flex items-center justify-center mix-blend-multiply border-r border-gray-100">
              <img className="w-full max-w-sm object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" src={image} alt={title} />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
               <div className="mb-6">
                 <h1 className="font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">{title}</h1>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                       <span className="text-yellow-600 text-sm font-bold mr-1">★</span>
                       <span className="text-yellow-700 text-sm font-bold">{singleProduct.rating.rate}</span>
                    </div>
                    <span className="text-gray-400 text-sm">({singleProduct.rating.count} reviews)</span>
                 </div>
                 <p className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">${price}</p> 
                 <p className="text-gray-600 text-lg leading-relaxed mb-8">{description}</p>
               </div>
               <button 
                 onClick={handleCartItem} 
                 className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-slate-900/20 transform hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
               > 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  Add to Cart
               </button>
            </div>
         </div>
      </div>
   )
};
export default ProductDetails;
