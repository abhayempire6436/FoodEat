import React from "react";
import FoodImg from '../../assets/food.png'

const Hero = () => {
  return (
    <div>
      <div className="flex gap-5 flex-col md:flex-row p-16">
        <div className="flex flex-col gap-10  md:w-full">
          <h1 className="text-5xl font-semibold">Delicious Food Is Waiting For You</h1>
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            assumenda qui ipsam id officiis modi cumque minus dolores placeat
            explicabo.
          </p>
          <div className="btns justify-center md:justify-start items-center flex gap-3">
            <button className="hover:scale-105 transition transform duration-300 bg-yellow-300 rounded-xl p-2 px-3">Food Menu</button>
            <button className="hover:scale-105 transition transform duration-300 bg-black text-yellow-300 rounded-xl p-2 px-3">Food Table</button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
            <img className="sm:w-[400px] w-[300px] " src={FoodImg} alt="food" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
