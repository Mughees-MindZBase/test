import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-background w-full h-20">
        <div className="flex px-[10%] justify-between items-center pt-5">
          <div>
            <p className="text-white font-bold text-5xl">FerryEngine</p>
          </div>

          <div className="flex mr-10 space-x-5">
            <a href="#" className="text-white text-base hover:underline">
              Destinations
            </a>
            <a href="#" className="text-white text-base hover:underline">
              Companies
            </a>
            <a href="#" className="text-white text-base hover:underline">
              Routes
            </a>
            <a href="#" className="text-white text-base hover:underline">
              Reviews
            </a>
            <a href="#" className="text-white text-base hover:underline">
              About Us
            </a>
            <a href="#" className="text-white text-base hover:underline">
              Support
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
