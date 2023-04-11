import React from 'react';
import './Button.css';

const Button = ({ children, onClick }) => (
    <button className="button" onClick={onClick}>
        {children}
        <img className="arrow" src="/icons/arrow-right.svg" alt="arrow" />
    </button>
);

export default Button;
