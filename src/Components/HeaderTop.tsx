import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Headertop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block bg-white z-50 w-full">
      {/* Apply max-w to container to match banner's width */}
      <div className="container mx-auto py-4 px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Social Icons */}
          <div className="hidden lg:flex gap-3">
            <div className="header_top__icon_wrapper hover:text-pink-600 cursor-pointer">
              <BsFacebook />
            </div>
            <div className="header_top__icon_wrapper hover:text-pink-600 cursor-pointer">
              <BsTwitter />
            </div>
            <div className="header_top__icon_wrapper hover:text-pink-600 cursor-pointer">
              <BsInstagram />
            </div>
            <div className="header_top__icon_wrapper hover:text-pink-600 cursor-pointer">
              <BsLinkedin />
            </div>
          </div>

          {/* Free Shipping Text */}
          <div className="text-gray-500 text-[12px] text-center flex-1">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER $55
          </div>

          {/* Currency and Language Select */}
          <div className="flex gap-4">
            <select 
              className="text-gray-500 text-[12px] w-[70px] border-none bg-transparent"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="INR">INR</option>
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px] border-none bg-transparent"
              name="Language"
              id="Language"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headertop;





