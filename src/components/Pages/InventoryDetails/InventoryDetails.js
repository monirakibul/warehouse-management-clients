import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const InventoryDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://protected-savannah-19898.herokuapp.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    })

    // delivered item 
    const handleDelivered = () => {
        const newQuantity = parseInt(item.quantity) - 1;
        fetch(`https://protected-savannah-19898.herokuapp.com/update/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ quantity: newQuantity })
        })
            .then(res => res.json())
            .then(data => item.quantity = data.quantity)
    }


    // update quantity 
    const updateItem = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const newQuantity = parseInt(item.quantity) + parseInt(quantity);
        fetch(`https://protected-savannah-19898.herokuapp.com/update/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ quantity: newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                item.quantity = data.quantity;
                event.target.reset()
            })
    }
    return (
        <div className="bg-gray-100 flex-grow container px-5 py-4 mx-auto">
            {
                item.length == 0 ? <Loading></Loading> :
                    <div>
                        <h1 className="text-green-500 text-2xl mb-2 md:text-3xl lg:text-4xl font-bold p-4">Manage Item</h1>
                        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white p-5 rounded-md">
                            <img alt="ecommerce" className="lg:w-1/2 w-full object-center rounded border border-gray-200" src={item.image} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className=" text-left text-sm title-font text-gray-700 tracking-widest">By: {item.supplier}</h2>
                                <h1 className=" text-left text-gray-900 text-4xl title-font font-bold mb-1">{item.name}</h1>
                                <div className="flex mb-4">
                                    <span className="title-font font-medium text-2xl text-green-500"> ৳{item.price}</span>
                                </div>
                                <p className='text-left'>{item.description}</p>
                                <div className='flex flex-col items-baseline  md:flex-row  md:space-x-5 border-t border-gray-300 mt-5 pt-5'>
                                    <div className="w-full md:w-2/4 flex flex-col justify-center items-start ">
                                        <p className='my-4'>
                                            {item.quantity != 0 ? `In Stock: ${item.quantity}` : 'Out of Stock'}
                                        </p>
                                        <button onClick={handleDelivered} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                                            Delivered
                                        </button>
                                    </div>
                                    <form className='w-full md:w-2/4 flex flex-col justify-evenly items-baseline ' onSubmit={updateItem}>
                                        <input className="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="quantity" type="number" placeholder="Quantity" required />
                                        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                                            Update
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 text-center">
                            <button type="submit" onClick={() => navigate("/manage-items")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-10/12 md:w-1/3">
                                Manage Inventories
                            </button>
                        </div>

                    </div>

            }
        </div>

    );
};

export default InventoryDetails;