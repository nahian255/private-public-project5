import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Framwork from './Framwork';

const Topics = () => {
    const quaizData = useLoaderData()

    const dataes = quaizData.data
    // const { id, name, logo } = { quaizData }
    return (
        <div>

            <p className='text-2xl'>A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language.</p>
            {
                dataes.map(data => <Framwork
                    key={data.id}
                    data={data}
                ></Framwork>)
            }
        </div>
    );
};

export default Topics;