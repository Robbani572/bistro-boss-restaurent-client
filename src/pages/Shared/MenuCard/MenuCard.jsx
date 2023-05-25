

const MenuCard = ({ item }) => {

    const { image, name, recipe } = item;

    return (
        <div className="card rounded-none w-96 bg-[#F3F3F3]">
            <img src={image} alt="" />
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold uppercase text-center">{name}</h2>
                <p>{recipe}</p>
            </div>
            <div className="flex w-full justify-center mb-8">
                <button className="btn btn-outline border-0 border-b-2 bg-[#E8E8E8] w-1/3 text-[#BB8506]">Add to cart</button>
            </div>
        </div>
    );
};

export default MenuCard;