import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../../CustomLink/CustomLink';

const Header = () => {

    const [isActive, setActive] = useState(false);

    // Add Event Listeners
    const toggleMenu = () => {
        setActive(!isActive);
    }

    return (
        <div>
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                {/* logo  */}
                                <a href="#" className="flex items-center py-4 px-2">
                                    {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                                    <span className="text-green-500 text-2xl md:text-2xl lg:text-2xl font-bold">QUICK STORE</span>
                                </a>
                            </div>
                            {/* desktop Navbar  */}
                            <div className="hidden md:flex items-center space-x-1">
                                <CustomLink to="/">Home</CustomLink>
                                <CustomLink to="/blogs">Blogs</CustomLink>
                                <CustomLink to="/">Home</CustomLink>
                                <CustomLink to="/">Home</CustomLink>
                                <CustomLink to="/">Home</CustomLink>
                            </div>
                        </div>
                        {/* Secondary Navbar items  */}
                        <div className="hidden md:flex items-center space-x-3 ">
                            <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
                            <Link to="/signup" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
                        </div>
                        {/* Mobile menu button  */}
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu} className="outline-none mobile-menu-button">
                                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                    x-show="!showMenu"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile menu  */}
                <div className={isActive ? 'mobile-menu lg:hidden' : 'lg:hidden hidden mobile-menu'}>
                    <CustomLink onClick={toggleMenu} style={{ display: 'block', width: '100%', padding: '10px' }} to="/">Home</CustomLink>
                    <CustomLink onClick={toggleMenu} style={{ display: 'block', width: '100%', padding: '10px' }} to="/login">LogIn</CustomLink>
                    <CustomLink onClick={toggleMenu} style={{ display: 'block', width: '100%', padding: '10px' }} to="/signup">SignUp</CustomLink>

                </div>

            </nav>
        </div>
    );
};

export default Header;