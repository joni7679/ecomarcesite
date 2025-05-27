import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaHeart, FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Sidebar = () => {
    const menuItems = [
        { icon: <FaTachometerAlt />, label: 'Dashboard', path: '/dashboard' },
        { icon: <FaBoxOpen />, label: 'My Orders', path: '/dashboard/orders' },
        { icon: <FaShoppingCart />, label: 'Cart', path: '/dashboard/cart' },
        { icon: <FaHeart />, label: 'Wishlist', path: '/dashboard/wishlist' },
        { icon: <FaUserCircle />, label: 'Profile', path: '/dashboard/profile' },
        { icon: <FaCog />, label: 'Settings', path: '/dashboard/settings' },
        { icon: <FaSignOutAlt />, label: 'Logout' },
    ];
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
            <div className="flex min-h-screen">
                <div className="w-64 text-white bg-gray-800 shadow-lg">
                    <ul className="p-4 space-y-3">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-4 p-3 rounded-lg transition-all ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                                        }`
                                    }
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span >{item.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Sidebar;
