import React from 'react'
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <div className="bg-yellow-300 px-20 flex justify-between p-5 items-center justify-center">
            {/* logo section */}
            <div className="logo">
                <h1 className='text-4xl font-bold'>FOOD<span className='text-red-500'>EAT</span></h1>
            </div>
            <nav className='flex justify-center items-center gap-3'>
                <ul className="hidden sm:flex gap-3 items-center">
                    <li className='hover:border-b-2 border-red-500'><a href="#">Home</a></li>
                    <li className='hover:border-b-2 border-red-500'><a href="#">Menu</a></li>
                    <li className='hover:border-b-2 border-red-500'><a href="#">About</a></li>               
                </ul>
                <div className='cursor-pointer'>
                    <FaAngleDown />
                </div>
            </nav>
            
            
            
        </div>
    </div>
  )
}

export default Navbar