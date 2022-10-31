import React, { useCallback, useState, useEffect } from "react"
import Button from "../reusables/Button";
import{ getEventId } from '../../utilService';
import { useParams } from "react-router-dom";



const Redbox = () => {

    const { id } = useParams();
    console.log(id)

    const [eventDeatils, setEventDetails] = useState ({})

    
    const details = useCallback(async () => {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          
          },
        };
    
        let url =`https://secretesant-a.herokuapp.com/api/v1/secretSanta/event-details/?eventId=${id}`
        
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          setEventDetails(data.data);
        
        }
      },);
    
      useEffect(() => {
        details();
      }, []);
    
      if (eventDeatils === null) {
        return (
          <div
            style={{
              width: "100%",
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
           <h1>No Event</h1>
          </div>
        );
      }


      
    const copyUrl = () =>{
        let baseUrl = "http://localhost:3002/registration/"
        let eventId = getEventId()
        console.log(baseUrl + eventId)
        navigator.clipboard
        .writeText(baseUrl+eventId)
        .then(() => alert("copied"))
        .catch(e => console.log(e))
    }

    return (
        <div>
            <div className="redBox">
                <div className="boxtext">
                    <h2>{eventDeatils.eventName}</h2>
                    <p>{eventDeatils.numberOfParticipants} participants</p>
                </div>
                <Button onClick={copyUrl}>Copy Invite Link</Button>
            </div>
        </div>

    );
};

export default Redbox;