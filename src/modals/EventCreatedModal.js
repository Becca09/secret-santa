import React from 'react';
import Modal from 'react-modal'
import ballons from "../assets/ballons.png"
import "../components/reusables/resusables.css"


const EventCreatedModal = ({modalOpen, closeModal}) => {
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
                        // marginTop: "1%",
                        // marginLeft: "20%"
                    }}>
                        <img src={ballons} width={170} alt="img"/>
                    </div>
                    <h2 style={{
                        textAlign: "center"
                    }}>
                        Yippiiee!! Your Event has been created!</h2>
                    <div style={{
                        textAlign: "center"
                    }}>
                        kindly check your email for your event ID and access to your event dashboard
                    </div>
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

export default EventCreatedModal;