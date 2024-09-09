import { PiGreaterThanBold } from "react-icons/pi";
import { HiOutlineSortDescending } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { GoGlobe } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { VscLocation } from "react-icons/vsc";
import { FaStar, FaStarHalf } from "react-icons/fa"; // Import star icons
import Image from "next/image";

import exampleImage from "../images/blueStar.png";

// Star Rating Component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (rating > i && rating < i + 1) {
      stars.push(<FaStarHalf key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaStar key={i} className="text-gray-300" />);
    }
  }
  return <div className="flex">{stars}</div>;
};

export default function Home() {
  return (
    <>
      <div className="px-[10%] py-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2">
          <p className="text-primary text-lg">Ferrytickets</p>
          <span className="text-gray-500">{">"}</span>
          <p className="text-gray-700 text-lg">Operators</p>
        </div>

        {/* Header and Button */}
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-bold text-4xl">Ferry Operators</p>
          <button className="flex gap-5 items-center bg-background text-white border-2 border-yellow-500 px-8 py-2 rounded-xl hover:bg-white hover:text-primary">
            <PiGreaterThanBold />
            Book your tickets
          </button>
        </div>

        {/* Operators Information */}
        <div>
          <p className="text-gray-700">
            Discover the <span className="font-bold">57 ferry operators</span>{" "}
            we work with
          </p>
        </div>

        {/* Filters and Buttons */}
        <div className="mt-5">
          <div className="flex justify-between">
            <div className="flex gap-5">
              <button className="bg-white text-gray-700 border border-gray-400 px-4 py-2 rounded-md flex items-center space-x-2">
                Filters
              </button>
              <button className="bg-white text-gray-700 border border-gray-400 px-4 py-2 rounded-md flex items-center space-x-2 ">
                <span>
                  <HiOutlineSortDescending />
                </span>
                <span>Sortby: Reviews number (highfirst)</span>
                <span>
                  <IoIosArrowDown />
                </span>
              </button>
              <button className="bg-white text-gray-700 border border-gray-400 px-4 py-2 rounded-md flex items-center space-x-2 gap-2 ">
                <span className="text-gray-700">
                  <IoMdSearch />
                </span>
                Search
              </button>
            </div>
            <div>
              <button className="bg-white text-primary border border-gray-400 px-4 py-2 rounded-md flex items-center space-x-2 gap-2 ">
                <GoGlobe />
                Live Map View
              </button>
            </div>
          </div>
        </div>

        {/* Filters Section with Country Dropdown and Checkboxes */}
        <div className="flex mt-5 gap-5">
          <div className="border border-gray-400 py-2 px-5 rounded-lg w-72">
            <div className="flex text-gray-700 justify-between font-bold">
              <p>Filters</p>
              <button>
                <RxCross2 />
              </button>
            </div>
            <div className="text-gray-600 font-semibold mt-4">
              <p>Operating in</p>
              <div className="relative mt-2">
                <select className="block w-full border border-gray-300 text-gray-700 py-2 pl-10 pr-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="select">Select a country</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="italy">Italy</option>
                  <option value="japan">Japan</option>
                </select>
                <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
                  <VscLocation />
                </div>
              </div>
              <hr className="my-4 border-gray-300" />
              <div>
                <p className="font-bold text-gray-700">Ferry types</p>
              </div>
              <div className="mt-2 space-y-2 font-normal">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-primary"
                  />
                  <span className="text-gray-500">Normal Ferries</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-primary"
                  />
                  <span className="text-gray-500">High-speed Ferries</span>
                </label>
              </div>
            </div>
          </div>

          {/* Image Section with Star Rating */}
          <div className="border flex justify-between border-gray-400 py-2 px-5 rounded-lg w-[100%] ">
            <div className="w-96">
              <Image
                src={exampleImage}
                alt="Featured Ferry"
                layout="responsive"
              />
            </div>
            <div className="flex flex-col justify-between h-10">
              <p className="text-gray-800 font-bold text-xl">
                Blue Star Ferries
              </p>
              <div className="flex items-center ">
                <StarRating rating={4.5} />
                <p className="text-gray-700 text-base">by 1.342 customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
