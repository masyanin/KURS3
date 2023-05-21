import React from 'react';
import {Outlet} from "react-router-dom";

const Findjob = () => {
    return (
        <div>
            Job
            <Outlet/>
        </div>
    );
};

export default Findjob;