import React from 'react';

const Blog = (props) => {
    const { title, body } = props.blog;
    return (
        <div className="m-5  p-5 bg-white border border-gray-200 rounded-xl">
            <div className="p-4">
                <h1 className="text-2xl font-medium text-slate-600 pb-2">{title}</h1>
                <p className="text-sm tracking-tight font-light text-slate-600 leading-6">{body}</p>
            </div>
        </div>
    );
};

export default Blog;