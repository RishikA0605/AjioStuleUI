import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar"; //default export
import {ProductCard} from "./components/ProductCard"; //named export
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import Men from "./components/Men";
import Kid from "./components/Kid";
import Error from "./components/Error";
import Women from "./components/Women";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import CompoA from "./components/CompoA";
import { Provider } from "react-redux";   
import appStore from "./store/store";
//import About from "./components/About";
//import Grocery from "./components/Grocery";  //normal import nhi karke hum lazy mai dalenge
import Memo from "./components/Memo";
import Ref from "./components/Ref";
import Login from "./components/Login";
//lazy loading
//code spliting
//dynamic import
 const Grocery = lazy(() => import("./components/Grocery")); //yeh component tab load hoga jab user grocery page pe jayega, isse humara initial load time kam ho jayega, aur user ko jaldi se content dikhai dega, isse humare app ki performance improve hogi, aur user experience bhi better hoga, kyunki user ko wait nahi karna padega grocery component ke load hone ka, jab tak wo us page pe nahi jayega, isse humare app ki speed bhi badh jayegi, aur user ko jaldi se content dikhai dega, isse humare app ki performance improve hogi, aur user experience bhi better hoga, kyunki user ko wait nahi karna padega grocery component ke load hone ka, jab tak wo us page pe nahi jayega
 const About = lazy(() => import("./components/About"));

 const App=()=> {
   return( 
   <Provider store={appStore}>
      <div>  
      <Navbar/>
      {/* <CompoA/> */}
      <Outlet/>
      
   </div>
   </Provider>)
};

const appRouter = createBrowserRouter([
   {
   path:"/",
   element:<App/>,
   children:[
       {
   path:"/",
   element:<ProductCard/>
},
      {
   path:"/Kid",
   element:<Kid/>
},
 {
   path:"/Login",
   element:<Login/>
},
{
   path:"/Men",
   element:<Men/>
},
{
   path:"/Women",
   element:<Women/>
},
{
   path:"/Grocery",
   element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
},
{
   path:"/Cart",
   element:<Cart/>
},
{
   path:"/Memo",
   element:<Memo/>
},
{
   path:"/Ref",
   element:<Ref/>
},
{
   path:"/About",
   element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
},
{
   path:"/product/:productId",
   element:<ProductDetails/>
},
   ],
   errorElement:<Error/>
},

])
//navbar-> logo,menu items, 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);