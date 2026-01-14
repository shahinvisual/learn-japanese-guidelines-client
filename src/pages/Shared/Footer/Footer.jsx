import { FaFacebookMessenger } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#455845] text-white">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Logo & Description */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">learnJapanese</h2>
                    <p className="text-sm leading-relaxed text-gray-200">
                        Guiding Bangladeshi students to success in Japanese with
                        trusted jobs, visa and study pathways.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><NavLink to="/courses" className="hover:text-white">Courses</NavLink></li>
                        <li><NavLink to="/appointment" className="hover:text-white">Book Appointment</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-white">About Us</NavLink></li>
                        <li><NavLink to="/contact" className="hover:text-white">Contact Us</NavLink></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><NavLink to="/eligibility" className="hover:text-white">Eligibility Check</NavLink></li>
                        <li><NavLink to="/faq" className="hover:text-white">FAQ</NavLink></li>
                        <li><NavLink to="/blog" className="hover:text-white">Blog</NavLink></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li>Email: learnJapanese23@gmail.com</li>
                        <li>Phone: +880 ***********</li>
                        <li className="flex items-center gap-2 mt-2">
                            <FaFacebookMessenger className="text-xl" />
                            <span>Facebook Messenger</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 py-4 text-center text-sm text-gray-200">
                © {new Date().getFullYear()} learnJapanese. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
