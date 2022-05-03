import React from 'react';

const Blogs = () => {
    return (
        <div className='my-3' id='blogs'>
            <h2 className='text-center mb-4'>Blogs</h2>
            <div className="container mb-5 mx-auto row gy-5">
                <div className='col-lg-4 col-sm-12 col-md-6'>
                    <div className="card">
                        <div className="card-body text-start">
                            <h5 className="card-title">Title</h5>
                            <p className="card-text">Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;