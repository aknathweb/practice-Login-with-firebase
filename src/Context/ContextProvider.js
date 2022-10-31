import React, { createContext } from 'react';

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
    const name = 'anik kumar nath'
    const AuthInfo = { name }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;