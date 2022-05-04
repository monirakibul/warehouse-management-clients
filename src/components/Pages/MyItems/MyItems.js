
import Icon from '@mdi/react';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SingleItem from '../SingleItem/SingleItem';


const MyItems = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/inventory?email=${user.email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/delete/${id}`;
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
        <div className='flex flex-col text-left items-center  min-h-screen'>
            <h1 className="text-green-500 text-2xl md:text-3xl lg:text-4xl mt-3 font-bold p-4">My Items</h1>

            <div className="overflow-x-auto w-full">
                <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
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
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <SingleItem item={item} handleDelete={handleDelete} handleUpdate={handleUpdate}></SingleItem>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyItems;