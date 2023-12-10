import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav]= useState(false);
    
    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <div className= "flex text-white justify-between items-center max-w-[1240px] h-24 px-4 mx-auto">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">TINAWEB</h1>
        <ul className='hidden md:flex '>
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Ressources</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
        </ul> 
        <div onClick={handleNav} className="block md:hidden">
           {!nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}
           
        </div>
        <div className={!nav? 'fixed top-0 w-[60%] h-full left-0 border-r border-r-gray-900 case-in-out duration-500 ': 'fixed left-[-100%]'}>
            <ul className="pt-24 uppercase">
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Company</li>
                <li className="p-4 border-b border-gray-600">Ressources</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4">Contact</li>
            </ul> 
        </div>        
    </div>
        
  )
}

export default Navbar