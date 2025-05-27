import React from "react";

const DashboardHome = () => {
    const userName = "Joni";
    const summary = {
        orders: 12,
        cart: 3,
        wishlist: 5,
        pending: 2,
    };

    const recentOrders = [
        { id: "ORD123", status: "Delivered", date: "2025-04-29" },
        { id: "ORD124", status: "Pending", date: "2025-04-30" },
        { id: "ORD125", status: "Cancelled", date: "2025-04-25" },
    ];

    return (
        <div className="p-6 bg-gray-950 text-white">

            <h2 className="text-2xl font-bold mb-4">Welcome back, {userName}! 👋</h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-[#374151] shadow-md rounded-xl p-4 text-center">
                    <h3 className="text-lg font-semibold">Total Orders</h3>
                    <p className="text-blue-600 text-2xl font-bold">{summary.orders}</p>
                </div>
                <div className="bg-[#374151] shadow-md rounded-xl p-4 text-center">
                    <h3 className="text-lg font-semibold">Items in Cart</h3>
                    <p className="text-green-600 text-2xl font-bold">{summary.cart}</p>
                </div>
                <div className="bg-[#374151] shadow-md rounded-xl p-4 text-center">
                    <h3 className="text-lg font-semibold">Wishlist</h3>
                    <p className="text-pink-600 text-2xl font-bold">{summary.wishlist}</p>
                </div>
                <div className="bg-[#374151] shadow-md rounded-xl p-4 text-center">
                    <h3 className="text-lg font-semibold">Pending Deliveries</h3>
                    <p className="text-yellow-600 text-2xl font-bold">{summary.pending}</p>
                </div>
            </div>


            <div className="bg-[#374151] shadow-md rounded-xl p-4 mb-6">
                <h3 className="text-xl font-semibold mb-3">Recent Orders</h3>
                <ul className="space-y-2">
                    {recentOrders.map((order) => (
                        <li
                            key={order.id}
                            className="flex justify-between items-center border-b pb-2"
                        >
                            <span>Order ID: {order.id}</span>
                            <span className={`text-sm font-medium ${order.status === 'Delivered' ? 'text-green-600' : order.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>
                                {order.status}
                            </span>
                            <span className="text-gray-500 text-sm">{order.date}</span>
                        </li>
                    ))}
                </ul>
            </div>


            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl">
                <p className="text-blue-700 font-medium">
                    📢 Your order #ORD124 is on the way. Expected delivery: May 3, 2025.
                </p>
            </div>
        </div>
    );
};

export default DashboardHome;
