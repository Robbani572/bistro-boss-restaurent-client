import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";


const ChefRecommends = () => {

    const [menu, setMenu] = useState([])


    useEffect(() => {
        fetch('menu.json')
        .then((response) => response.json())
        .then((data) => {
            const recommendedMenu = data.slice(0, 3);
            setMenu(recommendedMenu)
        })
    }, [])

    return (
        <div className="mb-32">
            <SectionTitle
                subHeading={'should try'}
                heading={'chef recommends'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    menu.map(item => <MenuCard
                    key={item._id}
                    item={item}
                    ></MenuCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;