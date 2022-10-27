import React from 'react';
import Modal from 'react-modal'
import ballons from "../assets/ballons.png"
import "../components/reusables/resusables.css"


const MatchedSuccess = ({modalOpen, closeModal}) => {
    return (
        <div>
            <Modal
                isOpen={modalOpen}
                className="modal-content"
                overlayClassName = "overlay"
                onRequestClose={() => closeModal()}

            >
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center"
                   
                }}>
                    <img src={ballons} width={170} alt="img"/>
                </div>
                <h2 style={{
                    textAlign: "center"
                }}>
                    Matching successfull</h2>
               
                <button onClick={() => closeModal()} style={{
                    padding: "2%",
                    color: "white",
                    backgroundColor: "red",
                    fontWeight: "bold",
                    textAlign: "center",
                    border: "none",
                    borderRadius: "4px",
                }}>X
                </button>
            </Modal>
        </div>

    )
        ;
};

export default MatchedSuccess;