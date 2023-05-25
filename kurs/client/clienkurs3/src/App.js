import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import ROFL from "./components/NavBar";


const App = ()=>{
    return (
        <BrowserRouter>
            <ROFL/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;
