import React from 'react';

const Framwork = ({ data }) => {
    const { name, id, logo } = data
    return (
        <div className='grid grid-rows-1'>

            <div className="card w-1/6 glass ">
                <figure><img src={logo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <a href=""><button className="btn btn-primary">Start Practice</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Framwork;