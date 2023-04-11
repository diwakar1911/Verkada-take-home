import React from 'react';
import './Grid.css';

const GridContainer = ({ children, style }) => (
    <div className="container" style={{...style}}>
        {children}
    </div>
);

const Grid = ({ size, children }) => (
    <div className={`column column-${size}`}>
        {children}
    </div>
);

export { GridContainer, Grid };
