import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100 py-16 flex-grow flex items-center justify-center">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                <div className="border-t border-gray-200 text-center pt-8">
                    <h1 className="text-9xl font-bold text-green-400">404</h1>
                    <h1 className="text-6xl font-medium py-8">Oops! Page not found</h1>
                    <p className="text-xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>

                    <button onClick={() => navigate('/')} className="bg-green-500 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-md">
                        Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;