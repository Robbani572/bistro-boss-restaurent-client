// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// images
import img1 from '../../../assets/images/home/slide1.jpg'
import img2 from '../../../assets/images/home/slide2.jpg'
import img3 from '../../../assets/images/home/slide3.jpg'
import img4 from '../../../assets/images/home/slide4.jpg'
import img5 from '../../../assets/images/home/slide5.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section className="pt-20">
                <SectionTitle
                subHeading={"11:00am to 10:00pm"}
                heading={"order online"}
                ></SectionTitle>
            <div className=" container mx-auto mb-24 md:px-40">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className="text-3xl font-bold uppercase text-center -mt-16 text-white">salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />

                    <h3 className="text-3xl font-bold uppercase text-center -mt-16 text-white">Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />

                    <h3 className="text-3xl font-bold uppercase text-center -mt-16 text-white">supe</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />

                    <h3 className="text-3xl font-bold uppercase text-center -mt-16 text-white">desart</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />

                    <h3 className="text-3xl font-bold uppercase text-center -mt-16 text-white">salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="" />

                    <h3 className="text-3xl font-bold uppercase text-center -mt-16 text-white">salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />

                    <h3 className="text-3xl font-bold uppercase text-center -mt-16 text-white">Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />

                    <h3 className="text-3xl font-bold uppercase text-center -mt-16 text-white">supe</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />

                    <h3 className="text-3xl font-bold uppercase text-center -mt-16 text-white">desart</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />

                    <h3 className="text-3xl font-bold uppercase text-center -mt-16 text-white">salad</h3>
                </SwiperSlide>
            </Swiper>
        </div>
        </section>
    );
};

export default Category;