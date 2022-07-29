import React from 'react';

const Button = ({children, type, onClick, buttonStyle,}) => {
    return (
        <button onClick={onClick} type ={type}  className={buttonStyle} >
            {children}
        </button>
    );
};

export default Button;