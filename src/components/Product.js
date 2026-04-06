const Product=({product}) =>{
  
const {image,title,price,rating}=product;
   return (
      <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 shadow-sm relative overflow-hidden group">
         <div className="w-full h-48 mb-4 flex items-center justify-center overflow-hidden mix-blend-multiply bg-gray-50/50 rounded-xl p-4">
             <img className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" src={image} alt={title}></img>
         </div>
         <div className="flex flex-col flex-1">
             <h1 className="font-bold text-gray-800 line-clamp-2 leading-tight mb-2">{title}</h1>
             <div className="mt-auto">
                 <div className="flex items-center gap-1 mb-2">
                     <span className="text-yellow-400 text-sm">★</span>
                     <span className="text-sm font-semibold text-gray-600">{rating?.rate} <span className="text-gray-400 font-normal">rating</span></span>
                 </div>
                 <p className="font-extrabold text-xl text-slate-900">${price}</p>
             </div>
         </div>
      </div>
   )
};
export default Product;



export const HOF =(Product)=>{
   return(props)=>{
      return(
          <div className="relative h-full"> 
         <span className="absolute z-10 -left-2 -top-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-br-xl rounded-tl-xl shadow-lg transform -rotate-2">Best Seller</span>
         <Product {...props}/>
      </div>
      );
 
   };
};

//const Component = HOF(Product);