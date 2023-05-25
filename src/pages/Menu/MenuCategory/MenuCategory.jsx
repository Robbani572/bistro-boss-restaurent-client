import { Link } from "react-router-dom";
import MenuCover from "../../Shared/MenuCover/MenuCover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img, details }) => {
    return (
        <div className="mb-32">
            {img && <MenuCover img={img} title={title} details={details}></MenuCover>}
            <div className="flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-screen-xl mx-auto p-8">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <div className="w-full flex justify-center mt-16">
                    <Link to={`/order/${title}`} className="btn btn-outline border-0 w-2/3 md:w-3/12 border-b-4"><button className="md:text-2xl uppercase">Order your favourite food</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;