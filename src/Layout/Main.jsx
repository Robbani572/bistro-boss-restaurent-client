import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/NavBar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <>
            <section className="fixed z-10 w-full bg-opacity-25 bg-black text-white">
                <Navbar></Navbar>
            </section>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;