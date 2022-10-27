import React from 'react';
import { useParams } from 'react-router-dom';
import Redbox from "../../components/dashboard/Redbox";
import logo from "../../assets/logo.png";
import './dashboard.css'
import Table from "../../components/dashboard/Table";

const Dashboard = () => {
    const {id} = useParams()
    console.log(id)
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