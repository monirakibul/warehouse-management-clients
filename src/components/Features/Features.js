import { mdiAccountCheck, mdiDatabasePlus, mdiSquareEditOutline } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';

const Features = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center flex-col">
            <h1 className="text-green-500 text-2xl md:text-3xl lg:text-4xl m-3 font-bold p-4">Features</h1>
            <div class="md:mt-8 grid grid-cols-1 md:grid-cols-3 md:w-10/12">

                {/* feature 1  */}
                <div className="lg:pt-12 pt-6 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                <Icon path={mdiAccountCheck}></Icon>
                            </div>
                            <h6 className="text-xl font-semibold">Sign Up</h6>
                            <p className="mt-2 mb-4 text-gray-600">
                                Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
                            </p>
                        </div>
                    </div>
                </div>

                {/* feature 2  */}
                <div className=" px-4 text-center">
                    <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                <Icon path={mdiDatabasePlus}></Icon>
                            </div>
                            <h6 className="text-xl font-semibold">
                                Add Item
                            </h6>
                            <p className="mt-2 mb-4 text-gray-600">
                                Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
                            </p>
                        </div>
                    </div>
                </div>

                {/* feature 3  */}
                <div className="lg:pt-12 pt-6  px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                <Icon path={mdiSquareEditOutline}></Icon>
                            </div>
                            <h6 className="text-xl font-semibold">
                                Manage Items
                            </h6>
                            <p className="mt-2 mb-4 text-gray-600">
                                Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;