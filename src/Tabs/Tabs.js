import React, { useEffect, useRef } from 'react';
import './Tabs.css';

const Tabs = ({ labels, onTabClick, activeTabIndex }) => {
    const progressBarRef = useRef(null);
    const animationFrameRef = useRef(null);

    const animateProgressBar = () => {
        const startTime = performance.now();
        const totalDuration = 3000; // 3 seconds

        const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progressPercentage = (elapsedTime / totalDuration) * 100;

            if (progressPercentage < 100) {
                progressBarRef.current.style.height = `${progressPercentage}%`;
                animationFrameRef.current = requestAnimationFrame(animate);
            } else {
                progressBarRef.current.style.height = '100%';
            }
        };

        progressBarRef.current.style.height = '0%';
        animationFrameRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        animateProgressBar();

        return () => {
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, [activeTabIndex]);

    return (
        <div className="tabs">
            {labels.map((label, index) => (
                <div key={index} className="tab">
                    <button
                        className={`tab-button${index === activeTabIndex ? ' active' : ''}`}
                        onClick={() => {
                            onTabClick(index);
                            animateProgressBar();
                        }}
                    >
                        {label}
                    </button>
                    {index === activeTabIndex && (
                        <div
                            ref={progressBarRef}
                            className="progress-bar"
                            style={{ height: '0%', transition: 'height 0s' }}
                        ></div>
                    )}
                    {index !== activeTabIndex && <div className="dot-icon"></div>}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
