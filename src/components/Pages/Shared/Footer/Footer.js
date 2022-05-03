import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='border-t-2 border-gray-100 bg-white rounded-lg shadow'>
            <footer className="max-w-6xl mx-auto px-4 p-4  md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link to="/" className="hover:underline">Quick Store</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap justify-center items-center mt-3 text-sm text-gray-500  sm:mt-0">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to='/blogs'>Blogs</Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;