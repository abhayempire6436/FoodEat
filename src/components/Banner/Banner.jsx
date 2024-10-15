import React from "react";
import BannerImg from "../../assets/4.png";

const Banner = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 p-7">
        <div className="img  flex items- justify-center">
          <img className="w-[600px] md:w-full" src={BannerImg} alt="404 not found" />
        </div>
        <div className="desc flex flex-col gap-7 justify-center  p-5">
          <h1 className="text-5xl font-semibold ">Food Is Always Good</h1>
          <p className=" font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            laboriosam vitae accusamus assumenda, nobis perferendis ducimus!
            Itaque similique, recusandae nulla
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
