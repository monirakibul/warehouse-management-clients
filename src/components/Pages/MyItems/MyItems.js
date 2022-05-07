
import Icon from '@mdi/react';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SingleItem from '../SingleItem/SingleItem';
import Loading from '../Loading/Loading';
import axios from 'axios';
import { signOut } from 'firebase/auth';

const MyItems = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetch data and stop loading 
    useEffect(() => {

        const getItems = async () => {
            const url = `https://protected-savannah-19898.herokuapp.com/my-items?email=${user.email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setItems(data)
                setLoading(false);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getItems();
    }, [user])


    // delete button onclick event 
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

    // update button onclick event
    const handleUpdate = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className=' bg-gray-100 p-5 flex flex-col text-left items-center flex-grow'>
            <div className="w-full my-5 m-4  md:w-8/12 flex justify-between items-center whitespace-nowrap">
                <h1 className="text-green-500 text-2xl md:text-3xl lg:text-4xl font-bold">My Items</h1>
                <button type="submit" onClick={() => navigate("/add-items")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                    Add new item
                </button>
            </div>
            <div className="overflow-x-auto w-full flex-grow md:w-8/12 mb-10">
                {
                    loading ? <Loading></Loading> :
                        items.length === 0 ?
                            <div className='w-full md:w-1/2 p-10 bg-white border-gray-100 rounded-lg text-center text-xl text-red-700 m-10 mx-auto'>
                                No item found
                            </div>
                            :
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

export default MyItems;