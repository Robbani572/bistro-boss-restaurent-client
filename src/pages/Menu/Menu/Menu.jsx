import MenuCover from "../../Shared/MenuCover/MenuCover";
import bgImage from "../../../assets/images/menu/banner3.jpg";
import dessertImg from "../../../assets/images/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/images/menu/pizza-bg.jpg";
import saladImg from "../../../assets/images/menu/salad-bg.jpg";
import soupImg from "../../../assets/images/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/UseMenu/useMenu";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";


const Menu = () => {

    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");

    return (
        <div>
            <MenuCover img={bgImage} title={"Our Menu"} details={"Would you like to try a dish?"}></MenuCover>
            <SectionTitle subHeading="Don't miss" heading="today's offer"></SectionTitle>
            <MenuCategory items={offered} title="offered"></MenuCategory>
            <MenuCategory items={salad} title="salad" details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={saladImg}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={pizzaImg}></MenuCategory>
            <MenuCategory items={soup} title="soup" details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={soupImg}></MenuCategory>
            <MenuCategory items={dessert} title="dessert" details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={dessertImg}></MenuCategory>
            <MenuCategory items={drinks} title="drinks" details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={dessertImg}></MenuCategory>

            <div className="max-w-screen-xl mx-auto text-center">
                <Link to="/menu"><button className="btn btn-outline border-0"><FaArrowUp className="w-10 h-10"></FaArrowUp></button></Link>
            </div>

        </div>
    );
};

export default Menu;