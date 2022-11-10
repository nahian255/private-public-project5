import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>Blog Part Question</h1>
            <p>1..what is the purpose of react router?</p>
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            <p>2..how does context api work</p>
            <p>Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props</p>
            <p>3..what is useref</p>
            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
        </div>
    );
};

export default Blog;