import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleItem from '../SingleItem/SingleItem';
import Loading from '../Loading/Loading';

const Inventory = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://protected-savannah-19898.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://protected-savannah-19898.herokuapp.com/delete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }

    const handleUpdate = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='flex flex-col text-left items-center flex-grow'>
            <h1 className="text-green-500 text-2xl md:text-3xl lg:text-4xl mt-3 font-bold p-4">Manage Inventories</h1>

            <div className="overflow-x-auto w-11/12 md:w-full h-full pb-10">
                {
                    items.length == 0 ?
                        <Loading></Loading> : <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                            <thead className="text-xs text-white uppercase bg-green-500 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Stock
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Supplier
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='border-l border-l-gray-300 border-r border-r-gray-300'>
                                {
                                    items.map(item => <SingleItem item={item} handleDelete={handleDelete} handleUpdate={handleUpdate}></SingleItem>)
                                }
                            </tbody>
                        </table>
                }
            </div>

        </div>
    );
};

export default Inventory;