

const MenuItem = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (
        <div className="col flex flex-col md:flex-row justify-between gap-4">
            <img style={{borderRadius: "0 200px 200px 200px"}} className="w-[118px]" src={image} alt="" />
            <div className="px-4">
                <h3 className="font-semibold text-2xl uppercase">{name}------------------</h3>
                <p className="text-gray-800">{recipe}</p>
            </div>
            <p className="text-2xl text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;