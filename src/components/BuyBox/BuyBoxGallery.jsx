import React, { useState } from 'react';
import './BuyBoxGallery.css';

function BuyBoxGallery({ images }) {
    
    const [mainImage, setMainImage] = useState(images[0].src); 

    const handleThumbnailClick = (imageSrc) => {
        setMainImage(imageSrc); 
    };

    return (
        <div className="carousel-container">
            <div className="main-image">
                <img src={mainImage} alt="Imagem principal" />
            </div>

            <div className="thumbnails">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src} 
                        alt={`Miniatura ${index + 1}`}
                        className={mainImage === image.src ? 'thumbnail active' : 'thumbnail'}
                        onClick={() => handleThumbnailClick(image.src)} 
                    />
                ))}
            </div>
        </div>
    );
}

export default BuyBoxGallery;
