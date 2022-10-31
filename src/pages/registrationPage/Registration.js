import React from "react";
import logo from "../../assets/logo.png";
import Button from "../../components/reusables/Button";
import "../registrationPage/registration.css";
import "../../components/reusables/resusables.css";
import Input from "../../components/reusables/Input";
import { useState } from "react";
import validator from "validator/es";
import JoinedSuccessfully from "../../modals/JoinedSuccessfully";
import { useParams } from "react-router-dom";

const Registration = () => {
  const { eventId } = useParams();
  const [successfullyJoinedOpen, setSuccessfullyJoinedOpen] = useState(false);
  const [values, setValues] = useState({wishList: []});
  const [formValid, setFormValid] = useState(true);
  const [fieldError, setFieldError] = useState({
    firstName: { message: "", error: false },
    lastName: { message: "", error: false },
    email: { message: "", error: false },
    wishList: { message: "", error: false },
    gender: { message: "", error: false },
  });

  const validateValues = () => {
    if (values.email && values.name && values.wishList) {
      if (
        validator.isEmail(values.email) &&
        values.email !== "" &&
        values.firstName !== "" &&
        values.lastName !== "" &&
        values.wishList !== [] &&
        values.gender !== ""
      ) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  const closeJoinedModal = () => {
    setSuccessfullyJoinedOpen(false);
  };


//   const handleReferencesChange = (e) => {
//     e.preventDefault();
//     const newReferences = values.references.push({[e.target.name]: e.target.value})
//     const newValues = {...values, references: newReferences}
//     setValues(newValues);
// }

//   const handleChange = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value,
//     });
//     checkIfFieldIsEmpty_(e);
//   };

const handleChange = (e) => {
    if( e.target.name === "wishList" ){
        setValues({...values, [e.target.name] : [...values["wishList"] , e.target.value ]})
    }else{
        setValues({...values, [e.target.name] : e.target.value })
    }
    checkIfFieldIsEmpty_(e)
}




  const join = async () => {
    const joinDetails = {
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender.toLocaleUpperCase(),
      emailAddress: values.email,
      wishList: values.wishList,
    };
    console.log(joinDetails)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joinDetails),
    };

    let url = `https://secretesant-a.herokuapp.com/api/v1/secretSanta/addUser/?eventCreatorId=${eventId}`;

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log( "data", data)

      if (response.ok) {
        console.log(data)
        alert("joined event")
        const formValid = validateValues();
        if (formValid) {
          setSuccessfullyJoinedOpen(true);
        } else {
          setFormValid(false);
        }
      }
    } catch (error) {
      console.log(error.message);
      setFormValid(false);
    }
  };

  const checkIfFieldIsEmpty_ = (e) => {
    setFormValid(true);
    switch (e.target.name) {
      case "firstName":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "enter your first name",
              error: true,
            },
          });
          setFormValid(false);
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

      case "lastName":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "enter your lastname",
              error: true,
            },
          });
          setFormValid(false);
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
          setFormValid(false);
        } else if (!validator.isEmail(e.target.value)) {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "invalid email",
              error: true,
            },
          });
          setFormValid(false);
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
      <JoinedSuccessfully
        isOpen={successfullyJoinedOpen}
        closeModal={closeJoinedModal}
      />
      <div className="header">
        <img src={logo} width={100} height={40} alt="logo" className="logo" />
      </div>
      <div className="firstSection_">
        <div className="text">
          <h1>Secret Santa Generator</h1>
          <p>Kindly Fill the form to get matched........</p>
        </div>
      </div>

      <div className="registrationForm">
        <div className="name">
          <Input
            text="text"
            inputLabel="firstName"
            label="First Name"
            handleChange={handleChange}
            fieldError={fieldError}
          />
          <Input
            text="text"
            inputLabel="lastName"
            label="Last Name"
            handleChange={handleChange}
            fieldError={fieldError}
          />
          <Input
            text="text"
            inputLabel="gender"
            label="Gender"
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
          onClick={join}
          type={"button"}
          buttonStyle={formValid ? "solid" : "disabled"}
        >
          Join Event
        </Button>
      </div>
    </div>
  );
};

export default Registration;
