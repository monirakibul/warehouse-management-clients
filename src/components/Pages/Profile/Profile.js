import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    return (
        <div className='bg-gray-100 flex flex-col text-left items-center flex-grow'>
            <h1 className="text-green-500 mt-3 p-4 text-2xl md:text-3xl lg:text-4xl font-bold">Profile</h1>
            <div className="w-11/12 md:w-2/4 m-5 mt-0 md:m-10 mx-auto z-10  p-10 bg-white shadow-2xl rounded-xl">
                <img
                    src={user.photoURL ?? 'https://i.ibb.co/zHQpg8Y/download.png'}
                    alt=""
                    className="rounded-full p-4 h-40 mx-auto"
                />
                {/* display name  */}
                <header className=" text-2xl font-extrabold py-4 px-4 text-center">
                    {user.displayName}
                </header>
                {/* display email  */}
                <div>
                    <ul className="text-gray-500 text-center font-semibold">
                        <li>{user.email}</li>
                    </ul>
                </div>

                <footer className="text-center py-3 px-8 text-gray-500">
                    <button
                        className="py-2 px-4 mt-5 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600"
                    >
                        FOLLOW
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Profile;