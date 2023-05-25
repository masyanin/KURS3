import React from 'react';
import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import CompanyList from "../components/CompanyList";
import Filterlist from "../components/filterlist";
import '../compstyles/SCFilter.css'

const Companies = () => {
    return (

            <div className="MainContent">
                <div className="Filtwrapper">
                    <Filterlist/>
                </div>
                <div className="Cont">
                    <CompanyList/>
                </div>
                <Outlet/>
            </div>


    );
};

export default Companies;