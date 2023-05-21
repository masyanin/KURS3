import React from 'react';
import {Outlet} from "react-router-dom";

const Auth = () => {
    return (
        <div>
            AUTH
            <Outlet/>
        </div>
    );
};

export default Auth;