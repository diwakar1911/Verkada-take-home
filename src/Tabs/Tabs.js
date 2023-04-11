import React, { useState, useEffect } from 'react';
import './Tabs.css';

const Tabs = ({ labels, onTabClick, activeTabIndex }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(0);

        const totalIntervalTime = 3000; // 3 seconds
        const timerInterval = 100; // 100ms
        const progressIncrement = 100 / (totalIntervalTime / timerInterval);

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 100) {
                    return prevProgress + progressIncrement;
                }
                return prevProgress;
            });
        }, timerInterval);

        return () => {
            clearInterval(interval);
        };
    }, [activeTabIndex]);

    return (
        <div className="tabs">
            {labels.map((label, index) => (
                <div key={index} className="tab">
                    <button
                        className={`tab-button${index === activeTabIndex ? ' active' : ''}`}
                        onClick={() => onTabClick(index)}
                    >
                        {label}
                    </button>
                    {/*{index === activeTabIndex && (*/}
                    {/*    <div className="progress-bar-container">*/}
                    {/*        <div*/}
                    {/*            className="progress-bar"*/}
                    {/*            style={{ height: `${progress}%` }}*/}
                    {/*        ></div>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    {index === activeTabIndex ? (
                        <div
                            className="progress-bar"
                            style={{ height: `${progress}%` }}
                        ></div>
                    ) : (
                        <div className="dot-icon"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
