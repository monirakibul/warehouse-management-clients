import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-screen container'>
            <h1 className="text-green-500 text-2xl md:text-3xl lg:text-4xl m-3 font-bold p-4">Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">

                {/* question 1 */}
                <div className="m-5 md:m-10  p-10 bg-white shadow-md rounded-xl">
                    <div className="p-4">
                        <small className="text-blue-400 text-xs">Automobile company</small>
                        <h1 className="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                        <p className="text-sm tracking-tight font-light text-slate-400 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
                    </div>
                </div>

                {/* question 2 */}
                <div className="m-5 md:m-10  p-10 bg-white shadow-md rounded-xl">
                    <div className="p-4">
                        <small className="text-blue-400 text-xs">Automobile company</small>
                        <h1 className="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                        <p className="text-sm tracking-tight font-light text-slate-400 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
                    </div>
                </div>

                {/* question 3 */}
                <div className="m-5 md:m-10  p-10 bg-white shadow-md rounded-xl">
                    <div className="p-4">
                        <small className="text-blue-400 text-xs">Automobile company</small>
                        <h1 className="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                        <p className="text-sm tracking-tight font-light text-slate-400 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
                    </div>
                </div>

                {/* question 4 */}
                <div className="m-5 md:m-10  p-10 bg-white shadow-md rounded-xl">
                    <div className="p-4">
                        <small className="text-blue-400 text-xs">Automobile company</small>
                        <h1 className="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                        <p className="text-sm tracking-tight font-light text-slate-400 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;