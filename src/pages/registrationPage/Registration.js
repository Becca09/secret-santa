import React from 'react';
import logo from "../../assets/logo.png";
import Button from "../../components/reusables/Button";
import '../registrationPage/registration.css'
import Input from "../../components/reusables/Input";
import {useState} from "react";
import validator from "validator/es";



const Registration = () => {
    const [values, setValues] = useState({})
    const [fieldError, setFieldError] = useState({
        name_: {message: "", error: false},
        email: {message: "", error: false},
        wishlist: {message: "", error: false},
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value

        });
        checkIfFieldIsEmpty_(e);
    }
    // const handleClick = () => {
    //
    // };
    const checkIfFieldIsEmpty_ = (e) => {
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
        <div className="">
            <div className = "header" >
                <img src={logo} width={100} height={40}  alt="logo" className="logo"/>
            </div>
            <div className="firstSection">
                <div className="text">
                    <h1>Secret Santa Generator</h1>
                    <p>Kindly Fill the form to get matched........</p>
                </div>
            </div>

            <div className="registrationForm">
                <div className="name">
                    <Input
                        text="text"
                        inputLabel="name"
                        label="First Name"
                        handleChange={handleChange}
                        fieldError={fieldError}
                    />
                    <Input
                        text="text"
                        inputLabel="name"
                        label="Last Name"
                        handleChange={handleChange}
                        fieldError={fieldError}
                    />
                </div>

                <Input
                    text="email"
                    inputLabel="email"
                    label="Email"
                    placeHolder="First Name"
                    handleChange={handleChange}
                    fieldError={fieldError}
                />
                <div className="wishList">
                    <Input
                        text="text"
                        inputLabel="wishList"
                        label="Wishlist"
                        placeHolder="item 1"
                        handleChange={handleChange}
                        fieldError={fieldError}
                    />
                    <Input
                        text="text"
                        inputLabel="wishList"
                        placeHolder="item 2"
                        handleChange={handleChange}
                        fieldError={fieldError}
                    />
                    <Input
                        text="text"
                        inputLabel="wishList"
                        placeHolder="item 3"
                        handleChange={handleChange}
                        fieldError={fieldError}
                    />
                    <Input
                        text="text"
                        inputLabel="wishList"
                        placeHolder="item 4"
                        handleChange={handleChange}
                        fieldError={fieldError}
                    />
                    <Input
                        text="text"
                        inputLabel="wishList"
                        placeHolder="item 5"
                        handleChange={handleChange}
                        fieldError={fieldError}
                    />
                    <Input
                        text="text"
                        inputLabel="wishList"
                        placeHolder="item 6"
                        handleChange={handleChange}
                        fieldError={fieldError}
                    />
                    <Input
                        text="text"
                        inputLabel="wishList"
                        placeHolder="item 7"
                        handleChange={handleChange}
                        fieldError={fieldError}
                    />
                </div>
                <Button onClick={onclick} type={"button"} buttonStyle={"solid"}>Join Event</Button>
            </div>
        </div>

    );
};

export default Registration;