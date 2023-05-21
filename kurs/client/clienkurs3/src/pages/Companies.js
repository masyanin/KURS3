import React from 'react';
import {Outlet} from "react-router-dom";

const Companies = () => {
    return (
        <div>
            Companies
            <Outlet/>
        </div>
    );
};

export default Companies;