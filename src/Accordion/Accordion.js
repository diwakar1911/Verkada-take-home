import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ accordionData }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onTitleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const renderedItems = accordionData.map((item, index) => {
        const isActive = index === activeIndex;

        return (
            <React.Fragment key={index}>
                <div
                    className={`title ${isActive ? 'active' : 'inactive'}`}
                    onClick={() => onTitleClick(index)}
                >
                    {isActive && <img src="/icons/icon-active.svg" className={"accordion-active-icon"} alt="arrow"/>}
                    {item.heading}
                    <span className="toggle-icon">{isActive ? '-' : '+'}</span>
                </div>
                <div className={`content ${isActive ? 'active' : ''}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return <div className="accordion">{renderedItems}</div>;
};

export default Accordion;
