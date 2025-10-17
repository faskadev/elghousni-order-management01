import React from "react";

export default function Dashboard() {

    const totalOrders = 120;
    const totalRevenue = 3500;
    const pendingOrders = 15;
    const deliveredOrders = 80;
    const totalProducts = 50;

    return (
        <div className="dashboard">
            <h1 className="dashboardtitle">Dashboard</h1>

            <div className="stats-overview">
                <h2 className="stat-item">Total Orders: {totalOrders}</h2>
                <h2 className="stat-item">Total Revenue: ${totalRevenue}</h2>
                <h2 className="stat-item">Total Products: {totalProducts}</h2>
                <h2 className="stat-item">Pending Orders: {pendingOrders}</h2>
                <h2 className="stat-item">Delivered Orders: {deliveredOrders}</h2>
            </div>
        </div>
    );
}