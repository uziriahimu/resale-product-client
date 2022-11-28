import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Header from '../pages/Shared/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    // const [isBuyer] = useBuyer(user?.email)
    // const [isSeller] = useSeller(user?.email)
    return (
        <div >
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-orange-500">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><Link to='/dashboard/orders'>My Orders</Link></li>

                        {/* <li><Link to='/dashboard/allusers'>All Users</Link></li> */}
                        <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                        <li><Link to='/dashboard/myproduct'>My Product</Link></li>
                        <li><Link to='/dashboard/mybuyers'>My Buyers</Link></li>
                        {
                            isAdmin &&
                            <li><Link to='/dashboard/allusers'>All Users</Link></li>

                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;