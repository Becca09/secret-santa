import React, {useState} from 'react';
import NavBar from "../../components/landingPage/NavBar";
import Input from "../../components/reusables/Input";
import illustration from "../../assets/undraw_Gift_re_qr17.png";
import email from "../../assets/mail.svg"
import Button from "../../components/reusables/Button";
import "./landingPage.css"
import validator from "validator/es";
import EventCreatedModal from "../../modals/EventCreatedModal";
import AccessCodeModal from "../../modals/AccessCodeModal";
import Modal from "react-modal";

Modal.setAppElement('#root');
const LandingPage = () => {
    const [AccessCodeEmailOpen, setAccessCodeEmailOpen ]= useState(false)
    const [eventCreatedModalOpen, setEventCreatedModalOpen] = useState(false)
    const [landing_Page, setLanding_page] = useState(true)
    const [values, setValues] = useState({})
    const [formValid, setFormValid] = useState(true);
    const [fieldError, setFieldError] = useState({
        name_: {message: "", error: false},
        email: {message: "", error: false},
        date: {message: "", error: false},
    })
    const validateValues = ()=>{
        if(values.email && values.name_ && values.date){
            if(validator.isEmail(values.email) && values.email !== "" && values.name_ !== "" && values.date !== ""){
                return true;
            } else {
                return  false;
            }
        }
        return false
    }
    const closeEventCreatedModal = () => {
        setEventCreatedModalOpen(false)
    }

    const submitAccessID = () =>{
        setAccessCodeEmailOpen(true)
    }
    const closeAccessModal = () => {
        setAccessCodeEmailOpen(false)
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value

        });
        checkIfFieldIsEmpty(e);
    }

    const checkIfFieldIsEmpty = (e) => {
        setFormValid(true);
        switch (e.target.name) {
            case "name_":
                if (e.target.value === "") {
                    setFieldError({
                        ...fieldError,
                        [e.target.name]: {
                            message: "kindly fill in event name ",
                            error: true,
                        },
                    });
                    setFormValid(false)
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

            case "email":
                if (e.target.value === "") {
                    setFieldError({
                        ...fieldError,
                        [e.target.name]: {
                            message: "please enter an email",
                            error: true,
                        },
                    });
                    setFormValid(false)
                }
                else if(
                    !validator.isEmail(e.target.value)
                ){
                    setFieldError({
                        ...fieldError,
                        [e.target.name]: {
                            message: "invalid email",
                            error: true,
                        },
                    });
                    setFormValid(false)
                }
                else {
                    setFieldError({
                        ...fieldError,
                        [e.target.name]: {
                            message: "",
                            error: false,
                        },
                    });
                }
                break;
            case "date":
                if (e.target.value === "") {
                    setFieldError({
                        ...fieldError,
                        [e.target.name]: {
                            message: "kindly fill in a valid date",
                            error: true,
                        },
                    });
                    setFormValid(false)
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
        if (e.target.value === " ") return true;
    };
    const submit = () =>{
        const formValid = validateValues();
        if(formValid){
            setEventCreatedModalOpen(true)
        } else {
            setFormValid(false);
        }

    }
    return (
        <div>
            <AccessCodeModal accessOpen = {AccessCodeEmailOpen} closeAccess = {closeAccessModal}/>
            <EventCreatedModal modalOpen={eventCreatedModalOpen} closeModal={closeEventCreatedModal}/>
            <section className="landingPage">
                <div>
                    <NavBar marker={setLanding_page} markerValue={landing_Page}/>
                </div>
                {landing_Page ? <div className="firstSection">
                        <div className="text">
                            <h1>Secret Santa Generator</h1>
                            <p>Start your anonymous matching with family, friends and colleagues! Happy gifting........</p>
                        </div>
                        <img src={illustration} width={300} alt="img"/>
                        <Button onClick={submitAccessID} type={"button"} buttonStyle={"solid"}>Access My Event</Button>
                    </div>
                    :
                    <div className="input-box">
                        <Input
                            text="text"
                            inputLabel="name_"
                            label="Event/Group Name"
                            handleChange={handleChange}
                             fieldError={fieldError}
                        />
                        <Input
                            hasIcon
                            icon={email}
                            text="email"
                            label="Organizer Email "
                            inputLabel="email"
                            handleChange={handleChange}
                            fieldError={fieldError}
                        />

                        <Input
                            className ="date_"
                            text="date"
                            inputLabel="date"
                            label="Event Date"
                            handleChange={handleChange}
                             fieldError={fieldError}
                        />
                        <Button
                            disabled={!formValid}
                            onClick={submit}
                            type={"button"}
                            buttonStyle={(formValid) ? "solid": "disabled"}
                        >Create Event
                        </Button>
                    </div>}
            </section>
            {/*<Footer/>*/}
        </div>
    );
};

export default LandingPage;