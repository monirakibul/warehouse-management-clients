import Icon from '@mdi/react';
import React from 'react';
import { mdiPencil, mdiTrashCan } from '@mdi/js';

const SingleItem = ({ handleDelete, handleUpdate, item }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <img src={item.image} style={{ borderRadius: '50%', width: '40px', height: '40px' }} alt="" />
            </th>
            <td className="px-6 py-4">
                {item.name}
            </td>
            <td className="px-6 py-4">
                ৳{item.price}
            </td>
            <td className="px-6 py-4">
                {item.quantity}
            </td>
            <td className="px-6 py-4">
                {item.supplier}
            </td>
            <td className="px-6 py-5 flex justify-center items-center">
                <div className='flex items-center justify-center '>
                    <Icon onClick={() => handleUpdate(item._id)} path={mdiPencil} size="25px" className="text-green-500 cursor-pointer"></Icon>
                    <Icon onClick={() => handleDelete(item._id)} path={mdiTrashCan} size="25px" className="text-red-500 cursor-pointer"></Icon>
                </div>

            </td>
        </tr>
    );
};

export default SingleItem;