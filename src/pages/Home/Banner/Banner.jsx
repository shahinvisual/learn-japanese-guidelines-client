import { NavLink } from "react-router-dom";
import bannerImg from "../../../assets/bannerImg.jpg";

const Banner = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4">

                {/* Banner Card */}
                <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Content (Text) */}
                    <div className="space-y-4 order-2 lg:order-1">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                            The Bridge to Your Japanese Success
                        </h1>

                        <h2 className="text-xl md:text-2xl font-semibold text-[#396395]">
                            From Language Learning to Visa Preparation
                        </h2>

                        <h3 className="text-lg md:text-xl font-medium text-gray-700">
                            Your Complete Japanese Journey
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            Our online courses are specially designed for Bangladeshi
                            students and job seekers. We provide more than just lessons—we
                            offer hands-on training for the SSW (Specified Skilled Worker)
                            exams, clear guidance for Student Visa applications, and
                            real-world preparation for the Japanese job market. Achieve
                            your dreams in Japan, all from the comfort of your home.
                        </p>

                        {/* Full Width Button */}
                        <NavLink
                            to="/courses"
                            className="btn btn-block bg-[#607253] text-white hover:bg-[#455845] border-none"
                        >
                            Explore Our Courses
                        </NavLink>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center order-1 lg:order-2">
                        <img
                            src={bannerImg}
                            alt="Learn Japanese"
                            className="w-full max-w-md rounded-lg"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;
