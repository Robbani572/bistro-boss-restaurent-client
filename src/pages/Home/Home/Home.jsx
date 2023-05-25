import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CategoryInfo from "../Category/CategoryInfo";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <section>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <section className="max-w-screen-xl mx-auto">
                <Category></Category>
            </section>
            <section className="bg-category-info max-w-screen-xl mx-auto py-8 bg-no md:py-16 bg-fixed mb-20 mt-20">
                <CategoryInfo></CategoryInfo>
            </section>
            <section className="bg-menu min-h-screen">
                <PopularMenu></PopularMenu>
            </section>
            <section className="max-w-screen-xl mx-auto">
                <ChefRecommends></ChefRecommends>
            </section>
            <section className="bg-featured bg-fixed">
                <FeaturedItem></FeaturedItem>
            </section>
            <section className="max-w-screen-xl mx-auto">
                <Testimonials></Testimonials>
            </section>
        </section>
    );
};

export default Home;