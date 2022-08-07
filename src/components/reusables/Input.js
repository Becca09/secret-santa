import React from 'react';

const Input = ({text, handleChange, placeHolder, icon, label, inputLabel, fieldError, hasIcon=false}) => {
    return (
        <div>
            <div className="input-container">
                <div className="label-container">
                    <label>{label}</label>
                </div>
                <div className="input-class">
                        <input name={inputLabel} type={text} onChange={handleChange} placeholder = {placeHolder} />
                        {hasIcon && <img src={icon} alt="input-icon"/>}

                </div>
            </div>
            <div className="input-error-container">
                <p className={fieldError[inputLabel].error ? "fieldError" : "noFieldError"}>
                    {fieldError[inputLabel].message}
                </p>
            </div>

        </div>
    );
};

export default Input;