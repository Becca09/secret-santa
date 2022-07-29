import React from 'react';

const Input = ({text, handleChange, icon, label, placeholder, num, fieldError, hasIcon=false}) => {
    return (
        <div>
            <div className="input-container">
                <div className="label-container">
                    <label>{label}</label>
                </div>
                <div className="input-class">

                        <input name={label} type={text} onChange={handleChange}/>
                        {hasIcon && <img src={icon} alt="input-icon"/> }


                </div>
            </div>
            {/*<div className="input-error-container">*/}
            {/*    <p className={fieldError[label].error ? "fieldError" : "noFieldError"}>*/}
            {/*        {fieldError[label].message}*/}
            {/*    </p>*/}
            {/*</div>*/}

        </div>
    );
};

export default Input;