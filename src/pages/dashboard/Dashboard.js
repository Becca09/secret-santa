import React from 'react';
import Redbox from "../../components/dashboard/Redbox";
import logo from "../../assets/logo.png";
import './dashboard.css'
import Table from "../../components/dashboard/Table";

const Dashboard = () => {
    return (
        <div>
            <div className = "header" >
                <img src={logo} width={100} height={40}  alt="logo" className="logo"/>
            </div>
            <Redbox/>
            <Table/>
        </div>
    );
};

export default Dashboard;