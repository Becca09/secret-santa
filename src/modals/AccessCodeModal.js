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

                    style={{
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            color: 'black',
                            height: '30%',
                            marginTop: "10%",
                            marginLeft: "20%",
                            width: "40%"

                        },

                        "@media (min-width: 320px) and  (max-width: 1024px)": {
                            content: {
                                color: 'black',
                                height: '50%',
                                marginTop: "10%",
                                marginLeft: "10%",
                                width: "80%"

                            },
                        }

                    }}
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