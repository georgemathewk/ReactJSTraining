import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setIsLoggedIn(foundUser);
            setUser(foundUser);
        }else{
            setIsLoggedIn(false);
        }
    }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [ user, setUser ] = useState(null);

    const handleLogin = (user) => {
        setIsLoggedIn(true);
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null);
        localStorage.clear();
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, handleLogin, handleLogout, user }}>
            {children}
        </LoginContext.Provider>
    );
};

export { LoginContext };
