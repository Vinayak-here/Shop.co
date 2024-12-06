import React from "react";
import Dropdown from "./ui/Dropdown";

const Topbar = () => {
  return (
    <>
      <div className="bg-black h-8 text-white w-full flex items-center relative">
       
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-center text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <a className="underline ml-16">Shop Now</a>
          </p>
        </div>
    
        
        <div className="absolute right-28 z-10">
          <Dropdown />
        </div>
      </div>
    </>
  );
};

export default Topbar;
