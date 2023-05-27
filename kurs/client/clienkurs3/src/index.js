import React, {createContext} from 'react';
import {createRoot} from "react-dom/client";
import UserStore from "./store/UserStore";
import CpageStore from "./store/CpageStore";
import WorkerStore from "./store/WorkerStore";
import App from './App';

export const Context = createContext(null)


const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        Company: new CpageStore(),
        Worker: new WorkerStore()
    }}>
        <App />
    </Context.Provider>
)


