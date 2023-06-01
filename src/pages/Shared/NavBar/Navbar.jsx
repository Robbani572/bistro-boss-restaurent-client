import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart/useCart";


const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext)
    const [cart, refetch] = useCart()

    const handleLogOut = () => {
        logOutUser()
    }

    const navItems = <>
        <li className="hover:text-[#BB8506] font-semibold md:text-xl uppercase"><Link to="/">Home</Link></li>
        <li className="hover:text-[#BB8506] font-semibold md:text-xl uppercase"><Link to="/menu">Our Menu</Link></li>
        <li className="hover:text-[#BB8506] font-semibold md:text-xl uppercase"><Link to="/order/salad">Order Food</Link></li>
        <li>
            <Link to="/dashboard/mycart">
                <button className="hover:text-[#BB8506] font-semibold md:text-xl uppercase flex gap-2">
                        <FaShoppingCart></FaShoppingCart>
                    <div className="badge bg-[#BB8506]">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
    </>

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-25 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogOut} className="btn btn-outline hover:border-[#BB8506] border-2 border-[#BB8506] text-white hover:bg-[#BB8506]">Log out</button> : <Link to="/login"><button className="btn btn-outline hover:border-[#BB8506] border-2 border-[#BB8506] text-white hover:bg-[#BB8506]">Login</button></Link>

                }

            </div>
        </div>
    );
};

export default Navbar;