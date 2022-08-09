import React from "react";
import LandingPage from "./pages/landingPage/LandingPage";
import Registration from "./pages/registrationPage/Registration";
import {Routes, Route} from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path = "/landingPage" element ={<LandingPage />}/>
                <Route path = "/registration" element ={<Registration/>}/>
                <Route path = "/dashboard" element ={<Dashboard/>}/>

            </Routes>
        </div>

    );
}

export default App;
