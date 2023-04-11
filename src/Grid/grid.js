import React from 'react';
import './grid.css';

const GridContainer = ({ children }) => (
    <div className="container">
        {children}
    </div>
);

const Grid = ({ size, children }) => (
    <div className={`column column-${size}`}>
        {children}
    </div>
);

export { GridContainer, Grid };
