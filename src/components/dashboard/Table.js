import MatchedSuccess from "../../modals/MatchedSuccessModal";
import Button from "../reusables/Button";
import { useParams } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";

const Table = () => {
  const [successfullMatch, setSuccessfullMatch] = useState(false);

  const [eventParticipants, setEventParticipants] = useState(null);

  const { id } = useParams();

  const participants = useCallback(async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    let url = `https://secretesant-a.herokuapp.com/api/v1/secretSanta/list-of-participants/?eventId=${id}`;

    const response = await fetch(url, options);
    console.log("Response", response);
    if (response.ok) {
      const data = await response.json();
      console.log("Data", data.data);
      setEventParticipants(data.data);
    }
  });

  useEffect(() => {
    participants();
  }, []);

  if (eventParticipants === null) {
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
        <h1>No participant</h1>
      </div>
    );
  }




  const closeMatchBox = () => {
    setSuccessfullMatch(false);
  };
  const generateMatches = async () => {
    const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      let url = "https://secretesant-a.herokuapp.com/api/v1/secretSanta/generate";
         
    const response = await fetch(url, options);
    console.log("Response", response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setSuccessfullMatch(true);    
    }
  };
    





  return (
    <div>
      <MatchedSuccess modalOpen={successfullMatch} closeModal={closeMatchBox} />
      <div className="table">
        <table>
          <tbody>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
            {eventParticipants.map((participant, index) => {
              return (
                <tr key={participant.id}>
                  <td>{index + 1}</td>
                  <td>{participant.firstName}</td>
                  <td>{participant.emailAddress}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Button
        type={"button"}
        buttonStyle={"tableButton"}
        onClick={generateMatches}
      >
        Generate Matches
      </Button>
    </div>
  );
};

export default Table;
