import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddItem = () => {

    const [user] = useAuthState(auth)

    const addItemDb = event => {
        event.preventDefault();


        const newItem = {
            name: event.target.name.value,
            email: user.email,
            image: event.target.image.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplier: event.target.supplier.value
        }


        axios.post('https://protected-savannah-19898.herokuapp.com/add-item', newItem)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Item Added!!!');
                    event.target.reset();
                }
            });
    }

    return (
        <div className='bg-gray-100 flex flex-col text-left items-center justify-center flex-grow'>
            <h1 className="text-green-500 text-2xl md:text-3xl lg:text-4xl mt-3 font-bold p-4">Add Item</h1>
            <div className="w-11/12 md:w-2/4 m-5 mt-0 md:m-10 mx-auto z-10  p-10 bg-white shadow-2xl rounded-xl">
                <form className="w-full space-y-8" onSubmit={addItemDb}>
                    <div className="relative">
                        <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Name</label>
                        <input name='name' type="text" className="block w-full px-4 py-2 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-green-500" placeholder="" required />
                    </div>
                    <div className="relative">
                        <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Image</label>
                        <input name='image' type="text" className="block w-full px-4 py-2 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-green-500" placeholder="" required />
                    </div>
                    <div className="relative">
                        <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Description</label>
                        <input name='description' type="text" className="block w-full px-4 py-2 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-green-500" placeholder="" required />
                    </div>
                    <div className="relative">
                        <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Price</label>
                        <input name='price' type="number" className="block w-full px-4 py-2 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-green-500" placeholder="" required />
                    </div>
                    <div className="relative">
                        <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Quantity</label>
                        <input name='quantity' type="number" className="block w-full px-4 py-2 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-green-500" placeholder="" required />
                    </div>
                    <div className="relative">
                        <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Supplier Name</label>
                        <input name='supplier' type="text" className="block w-full px-4 py-2 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-green-500" placeholder="" required />
                    </div>
                    <div className="relative">
                        <button className="inline-block w-full p-2 font-medium text-center text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-700 ease">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;