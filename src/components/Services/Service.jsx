import React from 'react'
import { MdOnlinePrediction } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { MdFoodBank } from "react-icons/md";
import { FaTruck } from "react-icons/fa";

const Service = () => {
  return (
    <div>
        <div className='pb-3'>
            <h1 className='text-center my-3 text-5xl font-semibold'>Our Services</h1>
            <div className=" service mx-auto gap-7 grid lg:grid-cols-4 grid-cols-2 p-5 items-center justify-center">
                <div className="online-booling flex flex-col justify-center items-center">
                    <MdOnlinePrediction className='text-3xl'/>
                    <p>Online Shopping</p>
                </div>
                <div className="fast-food flex flex-col justify-center items-center">
                    <IoFastFood className='text-3xl'/>
                    <p>Fast Food</p>
                </div>
                <div className="healthy-food flex flex-col justify-center items-center">
                    <MdFoodBank className='text-3xl'/>
                    <p>Healthy Food</p>
                </div>
                <div className="Delivery flex flex-col justify-center items-center">
                    <FaTruck className='text-3xl'/>
                    <p>Delivery</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service