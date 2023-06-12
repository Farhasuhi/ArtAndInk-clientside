import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaCheck, FaCheckDouble, FaHistory, FaHome, FaHouseUser, FaUserShield, FaUsers ,FaBookReader} from "react-icons/fa";
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';


const Dashboard = () => {
    
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    const adminSideBar = <>
        <li className='text-white'><Link><FaUserShield></FaUserShield> Admin</Link></li>
        <li className='text-white'><Link to={'/dashboard/allusers'}><FaUsers></FaUsers>All Users</Link></li>
        <li className='text-white'><Link> <FaCheckDouble></FaCheckDouble>  Manage Classes</Link></li>
        <li className='text-white mt-2 mx-2'>||</li>
        <li className='text-white'><Link to={'/'}><FaHome></FaHome> Home</Link></li>
    </>
    const instructorSidebar = <>
        <li className='text-white'><Link to={'/dashboard/instructorroom'}><FaHouseUser></FaHouseUser> Instructor Home</Link></li>
        <li className='text-white'><Link to={'/dashboard/addclass'}><FaBookReader></FaBookReader> Add Class</Link></li>
        <li className='text-white'><Link to={'/dashboard/instructoraddclsses'}><FaBookReader></FaBookReader>My Classes</Link></li>
        <li className='text-white mt-2 mx-2'>||</li>
        <li className='text-white'><Link to={'/'}><FaHome></FaHome> Home</Link></li>
    </>

    const studentSidebar = <>
        <li className='text-white'><Link to={'/dashboard/studentroom'}><FaHouseUser></FaHouseUser> Student Home</Link></li>
        <li className='text-white'><Link to={'/dashboard/myclasses'}><FaCheck></FaCheck>My select classes</Link></li>
        <li className='text-white' ><Link to={'/dashboard/enrolledclass'}><FaHistory></FaHistory> Enrolled classes</Link></li>
        <li className='text-white' ><Link to={'/dashboard/paymenthistory'}><FaHistory></FaHistory> Payment history</Link></li>
        <li className='text-white mt-2 mx-2'>||</li>
        {<li className='text-white'><Link to={'/'}><FaHome></FaHome> Home</Link></li>}
    </>


    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-blue-600  ">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-orange-50">
                        <Link to={'/'} className="flex items-center text-4xl font-bold">Ar<span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0e0eb8] to-cyan-600">t</span>&In<span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0e0eb8] to-cyan-600">k</span></Link>
                    </div>
                    <div className="flex-none  hidden lg:block">
                        <ul className="menu menu-horizontal text-[16px]">
                            {isAdmin && adminSideBar || isInstructor && instructorSidebar || studentSidebar}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                <div className='bg bg-slate-100'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu  p-4 w-80 h-full bg-blue-600 text-[16px]">
                    {isAdmin && adminSideBar || isInstructor && instructorSidebar || studentSidebar}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;