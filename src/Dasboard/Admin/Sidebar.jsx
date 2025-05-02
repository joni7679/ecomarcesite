import React from 'react';
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaUsers, FaTags, FaChartLine, FaEnvelope, FaCog, FaSignOutAlt, FaUserShield } from 'react-icons/fa';

const Sidebar = () => {
    const menuItems = [
        { icon: <FaTachometerAlt />, label: 'Dashboard' },
        { icon: <FaBoxOpen />, label: 'Products' },
        { icon: <FaShoppingCart />, label: 'Orders' },
        { icon: <FaUsers />, label: 'Customers' },
        { icon: <FaTags />, label: 'Coupons' },
        { icon: <FaChartLine />, label: 'Reports' },
        { icon: <FaEnvelope />, label: 'Messages' },
        { icon: <FaUserShield />, label: 'User Management' },
        { icon: <FaCog />, label: 'Settings' },
        { icon: <FaSignOutAlt />, label: 'Logout' },
    ];

    return (
        <div className="w-64 h-screen bg-gray-800 text-white shadow-lg">
            <div className="text-2xl font-bold p-6 border-b border-gray-700">
                Admin Panel
            </div>
            <ul className="p-4 space-y-3">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition-all"
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
