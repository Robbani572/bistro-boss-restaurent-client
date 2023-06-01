import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaCalendarAlt } from 'react-icons/fa';
import { AiFillHome, AiOutlineMenu, AiFillShopping } from 'react-icons/ai';
import { GiWallet } from 'react-icons/gi';
import { MdReviews } from 'react-icons/md';
import { BsBookmarkStarFill } from 'react-icons/bs';
import useCart from "../hooks/useCart/useCart";



const Dashboard = () => {
  const [cart] = useCart()
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content uppercase">

          <div className="mt-4 pl-4 mb-6 cursor-pointer">
            <h3 className="text-2xl font-bold">bistro boss</h3>
            <p className="text-xl">restaurent</p>
          </div>

          {/* <!-- Sidebar content here --> */}

          <li className="text-xl font-semibold hover:text-white"><NavLink to="/dashboard/home"><AiFillHome></AiFillHome> User Home</NavLink></li>
          <li className="text-xl font-semibold hover:text-white"><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
          <li className="text-xl font-semibold hover:text-white"><NavLink to="/dashboard/mywallet"><GiWallet></GiWallet> My Wallet</NavLink></li>
          <li className="text-xl font-semibold hover:text-white"><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>
           My Cart
           <div className="badge">+{cart?.length || 0}</div>
          </NavLink></li>
          <li className="text-xl font-semibold hover:text-white"><NavLink to="/dashboard/addreview"><MdReviews></MdReviews> Add a Review</NavLink></li>
          <li className="text-xl font-semibold hover:text-white"><NavLink to="/dashboard/mybookings"><BsBookmarkStarFill></BsBookmarkStarFill> My Bookings</NavLink></li>

          <div className="divider"></div>

          <li className="text-xl font-semibold hover:text-white"><NavLink to="/"><AiFillHome></AiFillHome> Home</NavLink></li>
          <li className="text-xl font-semibold hover:text-white"><NavLink to="/menu"><AiOutlineMenu></AiOutlineMenu> Menu</NavLink></li>
          <li className="text-xl font-semibold hover:text-white"><NavLink to="/order/salad"><AiFillShopping></AiFillShopping> Shop</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;