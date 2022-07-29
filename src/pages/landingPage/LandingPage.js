import React from 'react';
import NavBar from "../../components/landingPage/NavBar";
import Input from "../../components/reusables/Input";
import illustration from "../../assets/undraw_Gift_re_qr17.png";
import email from "../../assets/mail.svg"
import Button from "../../components/reusables/Button";
import "./landingPage.css"

const LandingPage = () => {
    return (
        <div >
            <section className="landingPage">
                <div>
                    <NavBar />
                </div>
                <div className="firstSection">
                    <div className="text">
                        <h1>Secret Santa Generator</h1>
                        <p>Start your anonymous matching with family, friends and colleagues! Happy gifting........</p>
                    </div>
                    <img src={illustration} width={300}  alt="img"/>
                </div>
                <div className="input-box">
                    <Input
                        text="text"
                        label="Event/Group Name"
                    />
                    <Input
                        hasIcon
                        icon={email}
                        text="email"
                        label="Organizer Email "
                    />
                    <Input
                        text="date"
                        label="Event Date"
                    />
                    <Button onClick={onclick} type={"button"} buttonStyle={"solid"}>Create Event</Button>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;