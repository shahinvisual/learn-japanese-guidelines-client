import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const navLinks = (
        <>
            <li><NavLink to="/courses">Course Details</NavLink></li>
            <li><NavLink to="/appointment">Book Appointment</NavLink></li>
            <li><NavLink to="/eligibility">Check Eligibility</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50">
            <div className="navbar px-4" style={{ backgroundColor: "#455845" }}>

                {/* Left */}
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost text-white text-2xl">
                            <HiMenuAlt3 />
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-56"
                        >
                            {navLinks}
                            <li>
                                <NavLink
                                    to="/login"
                                    className="btn btn-primary btn-sm mt-2 text-white"
                                >
                                    Sign In
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Brand */}
                    <NavLink
                        to="/"
                        className="text-2xl font-bold text-white"
                    >
                        learnJapanese
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white gap-1">
                        {navLinks}
                    </ul>
                </div>

                {/* Right */}
                <div className="navbar-end hidden lg:flex">
                    <NavLink
                        to="/login"
                        className="btn btn-sm bg-white text-[#396395] hover:bg-gray-100"
                    >
                        Sign In
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
