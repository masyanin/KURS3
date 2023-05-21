import React, {createContext} from 'react';
import {createRoot} from "react-dom/client";
import UserStore from "./store/UserStore";
import App from './App';

export const Context = createContext(null)

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
    <Context.Provider value={{
        user: new UserStore()
    }}>
        <App />
    </Context.Provider>
)


