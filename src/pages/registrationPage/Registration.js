import React from 'react';
import logo from "../../assets/logo.png";
import Button from "../../components/reusables/Button";
import '../registrationPage/registration.css'
import "../../components/reusables/resusables.css"
import Input from "../../components/reusables/Input";
import {useState} from "react";
import validator from "validator/es";




const Registration = () => {
    const [values, setValues] = useState({})
    const [formValid, setFormValid] = useState(true);
    const [fieldError, setFieldError] = useState({
        name: {message: "", error: false},
        email: {message: "", error: false},
        wishList: {message: "", error: false},
    })

    const validateValues = ()=>{
        if(values.email && values.name && values.wishList){
            if(validator.isEmail(values.email) && values.email !== "" && values.name !== "" && values.wishList !== ""){
                return true;
            } else {
                return  false;
            }
        }
        return false
    }

    const submit =() =>{
        const  formValid = validateValues();
        if(formValid){
            console.log('submitted')
        }
        else {
            console.log("not submitted")
        }
    }


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
        setFormValid(true);
        switch (e.target.name) {
            case "name":
                if (e.target.value === "") {
                    setFieldError({
                        ...fieldError,
                        [e.target.name]: {
                            message: "Kindly fill in an input",
                            error: true,
                        },
                    }); setFormValid(false);
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
            case "wishList":
                if (e.target.value === "") {
                    setFieldError({
                        ...fieldError,
                        [e.target.name]: {
                            message: "kindly fill in a item",
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
                <Button
                    disabled={!formValid}
                    onClick={submit}
                    type={"button"}
                    buttonStyle={(formValid) ? "solid": "disabled"}>
                    Join Event</Button>
            </div>
        </div>

    );
};

export default Registration;