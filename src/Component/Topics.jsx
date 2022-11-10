import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Framwork from './Framwork';

const Topics = () => {
    const quaizData = useLoaderData()

    const dataes = quaizData.data
    // const { id, name, logo } = { quaizData }
    return (
        <div>
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