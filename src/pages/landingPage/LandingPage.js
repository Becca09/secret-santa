import React, {useState} from 'react';
import NavBar from "../../components/landingPage/NavBar";
import Input from "../../components/reusables/Input";
import illustration from "../../assets/undraw_Gift_re_qr17.png";
import email from "../../assets/mail.svg"
import Button from "../../components/reusables/Button";
import "./landingPage.css"
import validator from "validator/es";

const LandingPage = () => {
    const [landing_Page, setLanding_page] = useState(true)
    const [values, setValues] = useState({})
    const [fieldError, setFieldError] = useState({
        name_: {message: "", error: false},
        email: {message: "", error: false},
        date: {message: "", error: false},
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value

        });
        checkIfFieldIsEmpty(e);
    }
    const handleClick = () => {

    };
    const checkIfFieldIsEmpty = (e) => {
        switch (e.target.name) {
            case "name_":
                if (e.target.value === "") {
                    setFieldError({
                        ...fieldError,
                        [e.target.name]: {
                            message: "kindly fill in your email",
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

            case "email":
                if (e.target.value === "") {
                    setFieldError({
                        ...fieldError,
                        [e.target.name]: {
                            message: "please enter a password",
                            error: true,
                        },
                    });
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

    return (
        <div>
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
                        <Button onClick={onclick} type={"button"} buttonStyle={"solid"}>Access My Event</Button>
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
                            text="date"
                            inputLabel="date"
                            label="Event Date"
                            handleChange={handleChange}
                            fieldError={fieldError}
                        />
                        <Button onClick={handleClick} type={"button"} buttonStyle={"solid"}>Create Event</Button>
                    </div>}
            </section>
            {/*<Footer/>*/}
        </div>
    );
};

export default LandingPage;