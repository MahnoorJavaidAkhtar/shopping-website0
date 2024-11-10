import React from 'react';
import { BiUser } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const HeaderMain = () => {
  return (
    <div className='border-b border-gray-200 py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        
        {/* Logo Section */}
        <div className='font-bold text-4xl text-black'>
          <img
            src='/path-to-your-logo.png'
            alt='Logo'
            className='w-[150px] h-auto'
          />
          MJ-SHOP
        </div>

        {/* Centered Search Bar */}
        <div className='flex-1 flex justify-center'>
          <div className='w-full sm:w-[300px] md:w-[70%] relative'>
            <input
              className='border-gray-200 border p-2 px-4 rounded-lg w-full'
              type='text'
              placeholder='Enter any product name..'
            />
            <BsSearch
              className='absolute right-0 top-0 mt-3 mr-3 text-gray-400'
              size={25} // Adjusted size of the search icon
            />
          </div>
        </div>

        {/* Icons aligned to the right with hover effects */}
        <div className='flex items-center gap-6 text-gray-500 text-[30px]'>
          <div className='hover:text-pink-600 transition-colors duration-300'>
            <BiUser />
          </div>
          <div className='relative hover:text-pink-600 transition-colors duration-300'>
            <FiHeart size={30} />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
              0
            </div>
          </div>
          <div className='relative hover:text-pink-600 transition-colors duration-300'>
            <HiOutlineShoppingBag size={30} />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
              0
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HeaderMain;







