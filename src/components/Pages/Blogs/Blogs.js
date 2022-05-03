import React from 'react';

const Blogs = () => {
    return (
        <div className='h-screen container'>
            <h1 className="text-green-500 text-2xl md:text-3xl lg:text-4xl m-3 font-bold p-4">Blogs</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">

                {/* question 1 */}
                <div class="bg-white m-4 rounded-2xl shadow">
                    <div class="p-4">
                        <small class="text-blue-400 text-xs">Automobile company</small>
                        <h1 class="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                        <p class="text-sm tracking-tight font-light text-slate-400 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
                    </div>
                </div>

                {/* question 2 */}
                <div class="bg-white m-4 rounded-2xl shadow">
                    <div class="p-4">
                        <small class="text-blue-400 text-xs">Automobile company</small>
                        <h1 class="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                        <p class="text-sm tracking-tight font-light text-slate-400 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
                    </div>
                </div>

                {/* question 3 */}
                <div class="bg-white m-4 rounded-2xl shadow">
                    <div class="p-4">
                        <small class="text-blue-400 text-xs">Automobile company</small>
                        <h1 class="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                        <p class="text-sm tracking-tight font-light text-slate-400 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
                    </div>
                </div>

                {/* question 4 */}
                <div class="bg-white m-4 rounded-2xl shadow">
                    <div class="p-4">
                        <small class="text-blue-400 text-xs">Automobile company</small>
                        <h1 class="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                        <p class="text-sm tracking-tight font-light text-slate-400 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;