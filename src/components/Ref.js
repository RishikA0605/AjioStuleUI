import React, { useState , useRef} from 'react'













const Ref = () => {
  const [y,setY]= useState(0);
    let x=0;
const ref= useRef(0);
  return (
    <div>
      <h1 className='max-w-4xl mx-auto border border-black mt-10'>ref</h1>
      <button className='bg-blue-500 rounded-md' onClick={()=>{
        x=x+1;
        console.log(x);

      }}>Increment X</button>
      <h1 className='font-bold text-2xl'> x= {x}</h1>
      <h1 className='font-bold text-2xl'> y= {y}</h1>
      <button className='bg-blue-500 rounded-md' onClick={()=>{
        setY(y+1);
      }}>Increment State Y</button>

      <h1 className='font-bold text-2xl'> Ref= {ref.current}</h1>
      <button className='bg-blue-500 rounded-md' onClick={()=>{
        ref.current=ref.current+1;
      }}>Increment Ref</button><br />

      <input type="text" className='border border-black' placeholder='Full NAME' ></input>
      <button>click</button>
    </div>
  )
}

export default Ref
