import MatchedSuccess from "../../modals/MatchedSuccessModal";
import Button from "../reusables/Button";
import { useParams } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react"



const Table = () => {
  const [successfullMatch, setSuccessfullMatch] = useState(false);

  const [eventParticipants, setEventParticipants] = ({})

  const { id } = useParams();

  
    
  const participants = useCallback(async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      
      },
    };

    let url =`https://secretesant-a.herokuapp.com/api/v1/secretSanta/list-of-participants/?eventId=${id}`
    
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      setEventParticipants(data.data);
    
    }
  },);

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
    setSuccessfullMatch(true);
  };
  return (
    <div>
      <MatchedSuccess
        modalOpen={successfullMatch}
        closeModal={closeMatchBox}
      />
      <div className="table">
        <table>
          <tbody>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
            <tr>
              <td>1</td>
              <td>{eventParticipants.firstName}</td>
              <td>{eventParticipants.emailAddress}</td>
            </tr>     
          </tbody>
        </table>
      </div>
      <Button type={"button"} buttonStyle={"tableButton"} onClick ={generateMatches}>
        Generate Matches
      </Button>
    </div>
  );
};

export default Table;
