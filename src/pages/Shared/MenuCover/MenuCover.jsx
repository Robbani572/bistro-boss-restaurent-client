import { Parallax } from 'react-parallax';


const MenuCover = ({img, title, details}) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="Food"
            strength={-200}
        >
            <div className="hero h-[400px] md:h-[700px]">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content bg-black bg-opacity-25 max-w-screen-xl mx-auto ">
                    <div className="md:my-[145px] md:mx-[398px]">
                        <h1 className="mb-5 md:text-7xl text-3xl uppercase font-semibold">{title}</h1>
                        
                        {
                            details.length < 50 ? <h3 className="md:text-2xl text-xl uppercase">{details}</h3> : 
                            <p className="uppercase">{details}</p>
                        }
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default MenuCover;