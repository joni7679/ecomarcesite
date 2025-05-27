import React, { useEffect, useState } from 'react';
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { authApiData, loginAuthData } from '../redux/slices/authSlice';
import userlogo from '../../public/imges/user.png'
import { logOut } from '../redux/slices/authSlice';
import { ToastContainer } from 'react-toastify/unstyled';
import { toast } from 'react-toastify';
export default function Header() {
  const [userData, SetUserData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auths, isLoggedIn, currentUser } = useSelector((state) => state.auths);
  const { products, isLoading, error, SearchQuery } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(authApiData())
  }, [dispatch])
  useEffect(() => {
    console.log("User component mounted or isLoggin changed");

    let storedUser = localStorage.getItem("user");
    console.log(storedUser);

    if (storedUser) {
      let parsedUser = JSON.parse(storedUser);

      if (auths && auths.id === parsedUser.id) {
        console.log(parsedUser.id);

        console.log(" User matches with Redux state");
        dispatch(loginAuthData());
      } else {
        console.log(" User does not match with Redux state");
      }

      SetUserData(parsedUser);
    }
  }, [isLoggedIn, auths]);

  // logOutFunction
  const logOutHandler = () => {
    const confirm = window.confirm("Are you sure you want to log out?");
    if (confirm) {
      toast.success("Logged out successfully!");
      setTimeout(() => {
        dispatch(logOut());
      }, 200)
    } else {
      toast.info("Logout cancelled.");
    }
  };

  return (
    <>
      <ToastContainer />
      <header className="px-5 py-3 bg-white shadow-lg ">
        <nav className="container mx-auto nav-bar">
          <div className="flex items-center justify-around nav-top-part">
            <div className="logo">
              <Link to={'/'}>My Market</Link></div>
            <div className="flex items-center space-x-4 nav-center">
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
                  <CiSearch className="absolute inline right-3 top-3" />
                </form>

              </div>
            </div>
            <div className="flex items-center gap-5 nav-right">
              <a href="#" className="flex items-center space-x-1 text-gray-600 capitalize">
                <span>Orders</span>
              </a>
              <a href="#" className="flex items-center space-x-1 text-gray-600 capitalize">
                <MdFavorite className="inline" /> <span>Favorites</span>
              </a>
              <a href="#" className="relative flex items-center space-x-1 text-gray-600 capitalize">
                <FaShoppingCart className="inline" />
                <Link to={'/cart'}>Cart</Link>
                <span className="absolute top-[-7px] right-0 bg-red-500 text-white rounded-full text-xs px-1">
                  3
                </span>
              </a>

              {!currentUser ? (
                <>
                  <Link to="/login" className="px-4 py-2 mr-2 text-white bg-green-500 rounded">Login</Link>
                  <Link to="/signup" className="px-4 py-2 text-white bg-blue-500 rounded">Signup</Link>
                </>
              ) : (
                <div className="relative text-white group">
                  <div className="bg-gray-600 rounded-full w-[55px] h-[55px] overflow-hidden cursor-pointer">
                    <img src={userlogo} alt="user" className="object-cover w-full h-full" />
                  </div>

                  <div className="absolute right-0 top-[60px] w-48 mt-[-20px] text-black bg-white rounded shadow-md hidden group-hover:block z-50">
                    <Link to="/dashboard/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</Link>
                    <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200">Your Dashboard</Link>
                    <button onClick={logOutHandler} className="w-full px-4 py-2 text-left text-red-500 hover:bg-gray-200">Logout</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-around gap-4 mt-5 overflow-scroll bottom-part">
            <a href="#" className="flex items-center gap-1 capitalize">
             
            </a>
          </div>
        </nav>
      </header>

    </>
  );
}
