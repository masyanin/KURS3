import React from 'react';
import {Outlet} from "react-router-dom";
import WorkerList from "../components/WorkerList";
import WFilterlist from "../components/Wfilterlist";

const Workers = () => {
    return (
        <div>
            <div className="MainContent">
                <div className="Filtwrapper">
                    <WFilterlist/>
                </div>
                <div className="Cont">
                    <WorkerList/>
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Workers;