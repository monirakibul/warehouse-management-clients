import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {


    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='bg-gray-100 flex-grow container'>
            <h1 className="text-green-500 text-2xl md:text-3xl lg:text-4xl m-3 font-bold p-4">Blogs</h1>
            <div className="text-left w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;