import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleInventory = (props) => {
    const { _id, name, image, description, price, quantity, supplier } = props.inventory;
    const navigate = useNavigate();
    return (
        <div class="flex flex-col bg-white border border-gray-100 m-5 md:m-10 shadow-lg hover:shadow-xl rounded-lg">
            <img class="h-72 p-5 rounded-t-lg border-b border-gray-100" src={image} />
            <div class="flex justify-between flex-grow items-start px-2 pt-2">
                <div class="p-2 flex-grow text-left">
                    <h1 class="font-medium text-xl font-poppins">{name}</h1>
                    <p class="text-gray-500 font-nunito">{description.slice(0, 100)}...</p>
                </div>

            </div>
            <div class="flex justify-between items-center px-2 pb-2 border-t border-gray-100">
                <div class="p-2 text-left">
                    <div class="text-green-500 font-semibold text-lg font-poppins">৳{price}</div>
                    <div class="text-xs text-gray-500 font-poppins">by {supplier}</div>
                </div>
                <div class="p-2 w-1/2">
                    <button onClick={() => navigate(`/inventory/${_id}`)} class="block w-full bg-green-500 hover:bg-green-600 text-white border-2 border-green-500 hover:border-green-600 px-3 py-2 rounded uppercase font-poppins font-medium">
                        UPDATE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleInventory;