import React from "react";
import "./Counter.css";

const Counter = ({ number, desc }) => {
    return (
        <div className={'counter-container'}>
            <h3 className={'counter-header'}>{number}</h3>
            <p className={'counter-desc'}>{desc}</p>
        </div>
    );
};

export default Counter;
