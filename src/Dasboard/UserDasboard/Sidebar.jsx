import React from 'react';
import { NavLink} from 'react-router-dom';
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaHeart, FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    const menuItems = [
        { icon: <FaTachometerAlt />, label: 'Dashboard', path: '/dashboard' },
        { icon: <FaBoxOpen />, label: 'My Orders', path: '/dashboard/orders' },
        { icon: <FaShoppingCart />, label: 'Cart', path: '/dashboard/cart' },
        { icon: <FaHeart />, label: 'Wishlist', path: '/dashboard/wishlist' },
        { icon: <FaUserCircle />, label: 'Profile', path: '/dashboard/profile' },
        { icon: <FaCog />, label: 'Settings', path: '/dashboard/settings' },
        { icon: <FaSignOutAlt />, label: 'Logout', path: '/logout' },
    ];

    return (
        <div className="flex min-h-screen">
            <div className="w-64 bg-gray-900 text-white shadow-lg">
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
                                <span>{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
};

export default Sidebar;
