import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className={`lg:py-4 px-2 ${match ? "lg:text-green-500 text-white bg-green-500 lg:bg-white lg:border-b-4 border-green-500" : "text-gray-500"} font-semibold lg:hover:text-green-500 transition duration-300 w-full md:block`}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
}

export default CustomLink;