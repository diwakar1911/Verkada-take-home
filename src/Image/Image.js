import React from 'react';

const Image = ({ src, alt, shadow }) => {
    return (
        <div className="image-container">
            <img src={src} alt={alt} className="image" />
            {shadow && (
                <div className="image-overlay"></div>
            )}
        </div>
    );
};

export default Image;

