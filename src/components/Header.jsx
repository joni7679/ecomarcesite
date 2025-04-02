import React, { useState } from 'react';
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { Link } from 'react-router-dom';



// The `Categories` prop is expected to be an array
export default function Header() {

  return (
    <>
      <header className="bg-white px-5 py-3 shadow-lg ">
        <nav className="nav-bar container mx-auto">
          <div className="nav-top-part flex items-center justify-around">
            <div className="logo">
              <Link to={'/'}>My Market</Link></div>
            <div className="nav-center flex items-center space-x-4">
              <div className="px-[25px] cursor-pointer py-[10px] rounded bg-[#4094F7] text-white">
                <CiMenuBurger className="inline" /> Categories
              </div>
              <div className="searchbar border hover:border-[blue] rounded w-96 relative">
                <form action="">
                  <input
                    type="text"

                    className="border-none rounded px-[25px] py-[10px] outline-none"
                    placeholder="Search..."
                  />
                  <CiSearch className="inline absolute right-3 top-3" />
                </form>

              </div>
            </div>
            <div className="nav-right flex items-center gap-5">
              <a href="#" className="text-gray-600 capitalize flex items-center space-x-1">
                <span>Orders</span>
              </a>
              <a href="#" className="text-gray-600 capitalize flex items-center space-x-1">
                <MdFavorite className="inline" /> <span>Favorites</span>
              </a>
              <a href="#" className="text-gray-600 capitalize flex items-center space-x-1 relative">
                <FaShoppingCart className="inline" />
                <Link to={'/cart'}>Cart</Link>
                <span className="absolute top-[-7px] right-0 bg-red-500 text-white rounded-full text-xs px-1">
                  3
                </span>
              </a>
              <Link to={'/signup'} className="px-[25px] py-[10px] rounded border-[1px] border-gray-500 hover:bg-blue-600 hover:border-white duration-150 hover:text-white">
                Signup
              </Link>
              <button>Light Them</button>
            </div>
          </div>
          <div className="bottom-part flex items-center gap-4 mt-5 justify-around overflow-scroll">
            <a href="#" className="capitalize flex items-center gap-1">
              <FiMapPin className="inline" /> Gangarampur
            </a>

            
          </div>
        </nav>
      </header>

    </>
  );
}
