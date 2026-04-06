import { useEffect, useState } from "react";

const useGetSingleProduct = (productId) => {
    const [singleProduct, setSingleProduct] = useState(null);
    useEffect(()=>{
        fetchSingleProduct();
    },[])

    const fetchSingleProduct = async()=>{
        const data = await fetch(`https://my-product-api-xi.vercel.app/api/products`);
        const jsonData = await data.json();
        const product = jsonData.find((p) => p.id === parseInt(productId));
        setSingleProduct(product || false);
    }
    return singleProduct;       
};
export default useGetSingleProduct;