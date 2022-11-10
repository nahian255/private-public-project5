import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Reactquestion = () => {
    const question = useLoaderData()
    console.log(question);
    return (
        <div>

            <p> 1 ....What is react JS used for?</p>
            <p>The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript</p>
            <p> 2 .....What is React and why use it?</p>

            <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.</p></div>
    );
};

export default Reactquestion;