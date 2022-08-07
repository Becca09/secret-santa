import React from 'react';
import Button from "../reusables/Button";


const Redbox = () => {
    return (
        <div>
            <div className="redBox">
                <div className="boxtext">
                    <h2>Valentine At Dekanorbs </h2>
                    <p>20/10/2022</p>
                    <p>With 10 Participant</p>
                </div>
                <Button>Copy Invite Link</Button>
            </div>
        </div>

    );
};

export default Redbox;