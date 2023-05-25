import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/UseMenu/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {

    const [menu] = useMenu()
    const popularMenu = menu.filter(item => item.category === 'popular')

    return (
        <section className="max-w-screen-xl mx-auto pt-20 mb-32">
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>

            <div className="flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        popularMenu.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <div className="w-full flex justify-center mt-16">
                <Link className="btn btn-outline border-0 w-4/12 border-b-4" to="/order/offered"><button className="uppercase md:text-2xl">view full menu</button></Link>
                </div>
            </div>
            <div className="mt-32 text-center bg-[#151515]">
                <h2 className="px-10 py-20 md:text-7xl text-white font-semibold">Call Us: +88 0192345678910</h2>
            </div>
        </section>
    );
};

export default PopularMenu;