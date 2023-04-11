import React from "react";
import "./ImageGallery.css";

const ImageGallery = ({ imageUrls }) => {
    return (
        <div className="image-galley-container">
            <div className="image-column">
                <img src={imageUrls[0]} alt="Rectangle" className="rectangle-image rounded-image" />
            </div>
            <div className="image-column square-images">
                <img src={imageUrls[1]} alt="Square 1" className="square-image rounded-image" />
                <img src={imageUrls[2]} alt="Square 2" className="square-image rounded-image" />
            </div>
        </div>
    );
};

export default ImageGallery;
