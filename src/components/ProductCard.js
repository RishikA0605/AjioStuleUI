//named export

import Product, { HOF } from "./Product";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

export const ProductCard = () => {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://my-product-api-xi.vercel.app/api/products",
    );
    const resData = await data.json();
    setListOfProduct(resData || []);
    setFilterProduct(resData || []);
  };

  const HOFComponent = HOF(Product); // this HOF is higher order component

  //conditional rendering
  //  if(listOfProduct.length===0){
  //   return<Skeleton/>
  //  }

  return listOfProduct.length === 0 ? (
    <Skeleton />
  ) : (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search and Filter Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8">
        <div className="flex flex-1 w-full gap-2 hidden md:flex">
          <span className="text-gray-500 font-medium tracking-wide">Showing {filterProduct.length} products</span>
        </div>
        
        <div className="flex w-full md:w-auto items-center gap-3">
          <div className="relative">
            <input
              className="w-full md:w-72 bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all shadow-sm"
              type="text"
              placeholder="Search products..."
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
          </div>
          <button
            onClick={() => {
              const keywords = searchText.toLowerCase().split(' ').filter(Boolean);
              const filteredData = listOfProduct.filter((product) => {
                const textToSearch = `${product.title} ${product.category} ${product.description}`.toLowerCase();
                return keywords.every(kw => textToSearch.includes(kw));
              });
              setFilterProduct(filteredData);
            }}
            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-xl font-semibold shadow-md active:scale-95 transition-all"
          >
            Search
          </button>
          
          <button
            onClick={() => {
              const keywords = searchText.toLowerCase().split(' ').filter(Boolean);
              const result = listOfProduct.filter((product) => {
                const textToSearch = `${product.title} ${product.category} ${product.description}`.toLowerCase();
                const matchesSearch = keywords.every(kw => textToSearch.includes(kw));
                return product.rating?.rate >= 4 && matchesSearch;
              });
              setFilterProduct(result);
            }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg text-white px-6 py-2.5 rounded-xl font-semibold shadow-md active:scale-95 transition-all whitespace-nowrap"
          >
            ★ Top Rated
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filterProduct.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`} className="group h-full flex flex-col">
              {
                product.rating.rate >= 4 ? <HOFComponent product={product}/> : <Product product={product}/>     
              }
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};
