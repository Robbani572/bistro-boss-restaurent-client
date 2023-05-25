

const SectionTitle = ({ subHeading, heading, style }) => {
    return (
        <div className="flex flex-col justify-center items-center my-16 text-center">

                <p className="capitalize text-[#D99904] text-xl">--- {subHeading} ---</p>
                <h3 className={`uppercase text-3xl font-bold border-y-4 py-6 mt-4 w-4/12 ${style}`}>{heading}</h3>


        </div>
    );
};

export default SectionTitle;