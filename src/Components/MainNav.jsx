
import { Link } from "react-router-dom";


const MainNav = () => {
    const navbar = <>
        <li><Link className="text-orange-500 font-bold text-xl">Home</Link></li>
        <li><Link className="text-blue-500 font-bold text-xl">Instructors</Link></li>
        <li><Link className="text-purple-500 font-bold text-xl">Classes</Link></li>
        <li><Link className="text-rose-500 font-bold text-xl">Dashboard</Link></li>
        <li><Link className="text-rose-500 font-bold text-xl navbar-end  justify-center items-center flex">
            <button className="btn btn-error text-white ml-10">Login</button>
        </Link></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-70 bg-black text-white justify-between items-center flex">
            <div className="w-[95%] mx-auto ">
                <div className="navbar-start justify-star items-center flex">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <div className="text text-orange-50">
                        <Link to={'/'} className="flex items-center text-4xl font-bold">Ar<span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0e0eb8] to-cyan-600">t</span>&In<span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0e0eb8] to-cyan-600">k</span></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex justify-between items-center">
                        {navbar}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainNav;