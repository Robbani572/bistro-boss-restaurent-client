import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import image from "../../../assets/images/home/featured.jpg"


const FeaturedItem = () => {
    return (
        <div className="max-w-screen-xl my-32 mx-auto p-4">
            <div className="md:pb-32 md:pt-10">
                <SectionTitle
                    subHeading={"check it out"}
                    heading={"from our menu"}
                    style={'text-white'}
                ></SectionTitle>
                <div className="flex flex-col md:flex-row gap-10 items-center text-white">
                    <img className="w-[648px] rounded-lg" src={image} alt="" />
                    <div>
                        <h4 className="text-2xl">March 20, 2023</h4>
                        <h3 className="text-2xl my-4">WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4 text-white mt-6">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;