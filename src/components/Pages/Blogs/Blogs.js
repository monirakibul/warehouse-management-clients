import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-gray-100 flex-grow container'>
            <h1 className="text-green-500 text-2xl md:text-3xl lg:text-4xl m-3 font-bold p-4">Blogs</h1>
            <div className="text-left w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">

                {/* question 1 */}
                <div className="m-5  p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="p-4">
                        <h1 className="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                        <p className="text-sm tracking-tight font-light text-slate-600 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
                    </div>
                </div>

                {/* question 2 */}
                <div className="m-5  p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="p-4">
                        <h1 className="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                        <p className="text-sm tracking-tight font-light text-slate-600 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
                    </div>
                </div>

                {/* question 3 */}
                <div className="m-5  p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="p-4">
                        <h1 className="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                        <p className="text-sm tracking-tight font-light text-slate-600 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
                    </div>
                </div>

                {/* question 4 */}
                <div className="m-5  p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="p-4">
                        <h1 className="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                        <p className="text-sm tracking-tight font-light text-slate-600 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;