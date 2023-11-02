import React, { createContext, useState } from 'react';

// Create a new context
export const PostContext = createContext();

// Create a provider component
export const PostProvider = ({ children }) => {
    const [post, setPost] = useState(null);

    const hi = (p) => {
        console.log('hi: ' , p);
        setPost(p);
        
    }

    return (
        <PostContext.Provider value={ { post, setPost, hi }}>
            {children}
        </PostContext.Provider>
    );
};
