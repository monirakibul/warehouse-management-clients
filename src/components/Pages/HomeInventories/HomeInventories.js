import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import SingleInventory from '../SingleInventory/SingleInventory';

const HomeInventories = () => {

    const [inventories, setInventories] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    // fetch inventories and stop loader 
    useEffect(() => {
        fetch('https://protected-savannah-19898.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => {
                setInventories(data.slice(0, 6)); //showing six items
                setLoading(false); // stop loading
            })
    }, [])


    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-green-500 text-2xl md:text-3xl lg:text-4xl mt-3 font-bold p-4">Inventories</h1>
            {
                // if loading is ture 
                loading ?
                    <div className="flex h-52 items-center justify-center">
                        <Loading></Loading>
                    </div>
                    :
                    // if item not found 
                    inventories.length === 0 ?
                        <div className='w-full md:w-1/2 p-10 bg-white border-gray-100 rounded-lg text-center text-xl text-red-700 m-10 mx-auto'>
                            No item found
                        </div>
                        :
                        // showing item 
                        <div class="grid grid-cols-1 md:grid-cols-3 md:w-10/12">
                            {
                                inventories.map(inventory => <SingleInventory key={inventory._id} inventory={inventory}></SingleInventory>)
                            }
                        </div>
            }

            <div className="p-10 text-center w-full">
                <button type="submit" onClick={() => navigate("/manage-items")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-10/12 md:w-1/4">
                    Manage Inventories
                </button>
            </div>
        </div>
    );
};

export default HomeInventories;