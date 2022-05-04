import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    })

    const handleDelivered = () => {
        const newQuantity = parseInt(item.quantity) + 1;
        fetch(`http://localhost:5000/update/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ newQuantity })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const updateItem = event => {
        event.preventDefault();
    }
    return (
        <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={item.image} />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class=" text-left text-sm title-font text-gray-700 tracking-widest">By: {item.supplier}</h2>
                    <h1 class=" text-left text-gray-900 text-4xl title-font font-bold mb-1">{item.name}</h1>
                    <div class="flex mb-4">
                        <span class="title-font font-medium text-2xl text-gray-900">${item.price}</span>
                    </div>
                    <p className='text-left'>{item.description}</p>
                    <div className='flex flex-col items-baseline  md:flex-row  md:space-x-5 border-t border-gray-300 mt-5 pt-5'>
                        <div class="w-2/4 flex flex-col justify-center items-start ">
                            <p className='my-4'>
                                Item stock: {item.quantity}
                            </p>
                            <button onClick={handleDelivered} type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                                Delivered
                            </button>
                        </div>
                        <form className='w-2/4 flex flex-col justify-evenly items-baseline ' onSubmit={updateItem}>
                            <input class="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="quantity" type="number" placeholder="Quantity" />
                            <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default InventoryDetails;