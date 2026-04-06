import React from "react";
import Accordian from "./Accordian";
import { useState } from "react";

const Men = () => {
  const [open, setOpen] = useState(null);
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="font-bold text-xl">Filter Options</h1>
      {["Brand", "Mens", "Gender", "Kids"].map((title, index) => (
        <Accordian 
        title={title} 
        key={index} 
        open={index ===open ? true : false}
        setOpen={()=> setOpen(index)}  
        />
      ))}
      
    </div>
  );
};
export default Men;
