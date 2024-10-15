import React from "react";
import first from "../../assets/1.png";
import sec from "../../assets/2.png";
import third from "../../assets/3.png";


const TopList = () => {

    const FoodData = [
        {
            image: first,
            rating: "⭐⭐⭐⭐⭐",
            name: "Chilli Paneer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "10.99"
        },
        {
            image: sec,
            rating: "⭐⭐⭐⭐⭐",
            name: "Salad Diet",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "10.99"
        },
        {
            image: third,
            rating: "⭐⭐⭐⭐⭐",
            name: "Grilled Steak",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "10.99"
        }
    ];

  return (
    <div>
      <div>
        <div className="text-center flex flex-col">
          <h1 className="text-5xl font-semibold">Top List</h1>
          <p className="text-xl mb-3">Our Top list</p>
        </div>
        <div className="grid grid-cols-1  border-black px-10 sm:grid-cols-2 lg:grid-cols-3 m-4 gap-8">
          {FoodData.map((item, id)=>{
               return <div key={id} className="cursor-pointer hover:scale-110 transition transform duration-300 card  bg-yellow-200 px-5 py-10 rounded-3xl">
                    <img className="w-[200px] mx-auto" src={item.image} alt="" />
                    <p>⭐⭐⭐⭐⭐</p>
                    <h1 className="text-2xl font-semibold">{item.name}</h1>
                    <p className="">{item.desc}</p>
                    <h2 className="font-semibold">Price: {item.price}$</h2>
              </div>
          })}

          {/* <div className="card  bg-white p-5 rounded-3xl">
            <img className="w-[200px] mx-auto" src={first} alt="" />
            <p>⭐⭐⭐⭐⭐</p>
            <h1>Food Name 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h2>10.99$</h2>
          </div>

          <div className="card  bg-white p-5 rounded-3xl">
            <img className="w-[200px]" src={first} alt="" />
            <p>⭐⭐⭐⭐⭐</p>
            <h1>Food Name 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h2>10.99$</h2>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopList;
