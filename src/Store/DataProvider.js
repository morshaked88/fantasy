import React, { createContext, useContext, useState } from 'react';

const getData = createContext();
const { Provider } = getData;

const useData = () => {
    const context = useContext(getData);

    if (!context) {
        throw new Error('context must be whitin the provider');
    }

    return context;
}


const DataProvider = ({ children }) => {

    const [close, set_close] = useState(false);
    const [showRes, set_showRes] = useState(false);


    const state = {
        close,
        showRes
    };

    const cb = {
        set_close,
        set_showRes
    }

    return (
        <Provider value={{ ...state, ...cb }}>
            {children}
        </Provider>
    )
};

export { DataProvider, useData };