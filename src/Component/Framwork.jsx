import React from 'react';
import { Link } from 'react-router-dom';

const Framwork = ({ data }) => {
    const { name, id, logo } = data
    return (
        <div className='grid grid-rows-1 gap-4'>

            <div className="card w-1/6 h-5/6 glass ">
                <figure><img src={logo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <Link to={`/react/${id}`} className="btn btn-primary">Start practics</Link>

                </div>
            </div>
        </div>
    );
};

export default Framwork;