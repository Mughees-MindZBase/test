import React from "react";
import { FaHeadset } from "react-icons/fa";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";

import flag from "../../../images/flag.jpg";

const Header = () => {
  return (
    <>
      <div className="flex justify-between text-black mt-2 px-[10%]">
        <div className="flex">
          <FaHeadset />
          <p className="text-primary">+30 212 000 3006.</p>
          <p className="text-black pl-1">
            Available hours in France: 07:00 to 22:00
          </p>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <Image
              src={flag} // Path relative to public
              width={15} // Adjust size as needed
              height={15} // Adjust size as needed
              alt="Flag"
            />
            <p className="pl-2 pr-10">English</p>
          </div>
          <div className="flex items-center pr-10">
            <MdOutlineEuroSymbol />
            <p>Euro</p>
          </div>
          <div className="pr-10">
            <CiSearch />
          </div>
          <div className="flex items-center pr-10">
            <CgProfile />
            Login - Manage Bookings
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
