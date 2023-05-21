import React from 'react';
import {Outlet} from "react-router-dom";

const Workers = () => {
    return (
        <div>
            Workers
            <Outlet/>
        </div>
    );
};

export default Workers;