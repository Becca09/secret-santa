import React from 'react';
import Modal from "react-modal";
import Input from "../components/reusables/Input";
import {useState} from "react";


const AccessCodeModal = ({accessOpen, closeAccess}) => {
    const [values, setValues] = useState({})
    const [fieldError, setFieldError] = useState({
        eventID: {message: "", error: false},
    })
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value

        });
        checkIfFieldIsEmpty(e);
    }
    const checkIfFieldIsEmpty = (e) => {
        switch (e.target.name) {
            case "eventID":
                if (e.target.value === "") {
                    setFieldError({
                        ...fieldError,
                        [e.target.name]: {
                            message: "enter token",
                            error: true,
                        },
                    });
                } else {
                    setFieldError({
                        ...fieldError,
                        [e.target.name]: {
                            message: "",
                            error: false,
                        },
                    });
                }
                break;
            default:
                break;
        }
    }

        return (
            <div>
                <Modal
                    isOpen={accessOpen}
                    onRequestClose={() => closeAccess()}
                    className="modal-content"
                    overlayClassName = "overlay"
                >
                    <Input
                        text="text"
                        inputLabel="eventID"
                        label="Enter Event ID"
                        handleChange={handleChange}
                        fieldError={fieldError}
                    />
                    <button onClick={() => closeAccess()} style={{
                        padding: "3%",
                        color: "white",
                        marginTop: "3%",
                        backgroundColor: "red",
                        fontWeight: "bold",
                        textAlign: "center",
                        border: "none",
                        borderRadius: "4px",
                    }}>X
                    </button>
                </Modal>
            </div>
        );
    };


export default AccessCodeModal;