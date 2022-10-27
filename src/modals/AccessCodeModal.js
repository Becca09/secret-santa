import React from 'react';
import Modal from "react-modal";
import Input from "../components/reusables/Input";
import {useState} from "react";
import { setEventId } from '../utilService';
import { useNavigate } from 'react-router-dom';


const AccessCodeModal = ({accessOpen, closeAccess}) => {

    const navigate = useNavigate()

    const [values, setValues] = useState({})
    const [fieldError, setFieldError] = useState({
        eventID: {message: "", error: false},
    })

    const submit = () => {
      setEventId(values.eventID)
      navigate(`/dashboard/${values.eventID}`)
    }


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
                        cursor:"pointer",
                        paddingTop: "1%",
                        paddingBottom: "1%",
                        color: "white",
                        marginTop: "3%",
                        backgroundColor: "red",
                        fontWeight: "bold",
                        textAlign: "center",
                        border: "none",
                        borderRadius: "4px",
                    }}>X
                    </button>
                    <button style={{
                        cursor:"pointer",
                        padding: "1%",
                        color: "white",
                        marginLeft: "80%",
                        backgroundColor: "red",
                        fontWeight: "bold",
                        textAlign: "center",
                        border: "none",
                        borderRadius: "4px",
                    }}
                    onClick ={submit}
                    >Submit</button>
                </Modal>
            </div>
        );
    };


export default AccessCodeModal;