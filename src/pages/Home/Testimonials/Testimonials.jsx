import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Rating } from "@smastrom/react-rating";


const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])

    return (
        <div>
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={"testimonials"}
            ></SectionTitle>

            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="m-20 flex flex-col items-center">
                            <Rating                          
                                style={{ maxWidth: 200 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="w-24 h-24 mt-4"></FaQuoteLeft>
                            <p className="text-gray-800 my-6">{review.details}</p>
                            <h3 className="text-3xl font-semibold uppercase text-[#CD9003]">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>

        </div>
    );
};

export default Testimonials;