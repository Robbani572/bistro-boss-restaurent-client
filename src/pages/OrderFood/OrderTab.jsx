import MenuCard from "../Shared/MenuCard/MenuCard";


const OrderTab = ({menu}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menu.map((item) => (
                            <MenuCard
                                key={item._id}
                                item={item}
                            ></MenuCard>
                        ))}
        </div>
    );
};

export default OrderTab;