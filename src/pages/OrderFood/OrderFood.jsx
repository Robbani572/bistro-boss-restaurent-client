import MenuCover from "../Shared/MenuCover/MenuCover";
import orderImg from "../../assets/images/shop/order-bg.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useMenu from "../../hooks/UseMenu/useMenu";
import MenuCard from "../Shared/MenuCard/MenuCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { useState } from "react";


const OrderFood = () => {

    const categories = ['offered', 'salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const [menu] = useMenu();
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    console.log(category);

    const offered = menu.filter(item => item.category === 'offered');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <section className="mb-32">
            <MenuCover img={orderImg} title="order food" details="would you like to try a dish?"></MenuCover>

            <Tabs
                selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}
                selectedTabClassName="border-[#BB8506] border-b-4 border-0 text-[#BB8506]"
                className="max-w-screen-xl mx-auto mt-20"
            >

                <TabList className="flex justify-center items-center md:gap-8 md:p-8 mb-8 gap-4">
                    <Tab className="md:text-2xl text-sm md:font-bold font-light cursor-pointer text-center uppercase">offered</Tab>
                    <Tab className="md:text-2xl text-sm md:font-bold font-light cursor-pointer text-center uppercase">Salad</Tab>
                    <Tab className="md:text-2xl text-sm md:font-bold font-light cursor-pointer text-center uppercase">pizza</Tab>
                    <Tab className="md:text-2xl text-sm md:font-bold font-light cursor-pointer text-center uppercase">soups</Tab>
                    <Tab className="md:text-2xl text-sm md:font-bold font-light cursor-pointer text-center uppercase">desserts</Tab>
                    <Tab className="md:text-2xl text-sm md:font-bold font-light cursor-pointer text-center uppercase">drinks</Tab>
                </TabList>



                <TabPanel>
                    <OrderTab menu={offered}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab menu={salad}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab menu={pizza}></OrderTab>
                </TabPanel>


                <TabPanel>
                    <OrderTab menu={soup}></OrderTab>
                </TabPanel>


                <TabPanel>
                    <OrderTab menu={dessert}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab menu={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default OrderFood;