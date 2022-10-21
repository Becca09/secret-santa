import React from 'react';
import Button from "../reusables/Button";
import{ getEventId } from '../../utilService';


const Redbox = () => {

    const copyUrl = () =>{
        let baseUrl = "http://localhost:3003/registration/"
        let eventId = getEventId()
        console.log(baseUrl + eventId)
    }

    return (
        <div>
            <div className="redBox">
                <div className="boxtext">
                    <h2>Valentine At Dekanorbs </h2>
                    <p>20/10/2022</p>
                    <p>With 10 Participant</p>
                </div>
                <Button onClick={copyUrl}>Copy Invite Link</Button>
            </div>
        </div>

    );
};

export default Redbox;