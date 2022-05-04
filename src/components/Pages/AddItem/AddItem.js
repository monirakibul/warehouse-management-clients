import React from 'react';
import { toast } from 'react-toastify';

const AddItem = () => {


    const addItemDb = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        toast('Product Added')
    }

    return (
        <div className='flex flex-col text-left items-center justify-center min-h-screen'>
            <h1 className="text-green-500 text-2xl md:text-3xl lg:text-4xl mt-3 font-bold p-4">Add Item</h1>
            <div class="w-4/4 md:w-2/4 m-5 mt-0 md:m-10 mx-auto z-10  p-10 bg-white shadow-2xl rounded-xl">
                <form class="w-full space-y-8" onSubmit={addItemDb}>
                    <div class="relative">
                        <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Name</label>
                        <input name='name' type="text" class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="John" />
                    </div>
                    <div class="relative">
                        <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Image</label>
                        <input name='image' type="text" class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Doe" />
                    </div>
                    <div class="relative">
                        <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Description</label>
                        <input name='description' type="text" class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="janedoe@email.com" />
                    </div>
                    <div class="relative">
                        <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Price</label>
                        <input name='price' type="text" class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="janedoe@email.com" />
                    </div>
                    <div class="relative">
                        <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Quantity</label>
                        <input name='quantity' type="text" class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="janedoe@email.com" />
                    </div>
                    <div class="relative">
                        <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Supplier Name</label>
                        <input name='supplier' type="text" class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="janedoe@email.com" />
                    </div>
                    <div class="relative">
                        <button class="inline-block w-full p-2 font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 ease">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;