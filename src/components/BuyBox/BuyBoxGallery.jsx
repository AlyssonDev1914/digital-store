import React, { useState } from 'react';
import './BuyBoxGallery.css';

function BuyBoxGallery({ images }) {
    // Inicializando a imagem principal com a primeira imagem
    const [mainImage, setMainImage] = useState(images[0].src); 

    const handleThumbnailClick = (imageSrc) => {
        setMainImage(imageSrc); // Atualiza a imagem principal
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
                        src={image.src} // Acessando o src da imagem
                        alt={`Miniatura ${index + 1}`}
                        className={mainImage === image.src ? 'thumbnail active' : 'thumbnail'}
                        onClick={() => handleThumbnailClick(image.src)} // Ao clicar, muda a imagem principal
                    />
                ))}
            </div>
        </div>
    );
}

export default BuyBoxGallery;
