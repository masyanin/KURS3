import React, {useContext, useEffect} from 'react';
import {Outlet} from "react-router-dom";
import WorkerList from "../components/WorkerList";
import WFilterlist from "../components/Wfilterlist";
import {Context} from "../index";
import {fetchWorker} from "../http/WorkerAPI";

const Workers = () => {
    const{Worker}=useContext(Context)
    useEffect(()=>{
        fetchWorker().then(data => Worker.setWork(data.rows))
    },[])
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