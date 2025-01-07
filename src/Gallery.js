import React, { useState } from 'react';
import './gallery.css';

export function Gallery() {
    const images = [
        { src: 'https://i.imgur.com/4lrTc5P.jpg', caption: 'Visit to MERC' },
        { src: 'https://i.imgur.com/eaqEY4B.jpg', caption: 'Workshop on Vision' },
        // Add more images here...
    ];

    const [expandedImage, setExpandedImage] = useState(null);

    const handleImageClick = (image) => {
        setExpandedImage(image === expandedImage ? null : image);
    };

    return (
        <section id="gallery">
            <h1 className="section-title">Gallery</h1>
            <p className="section-description">
                Take a look at some of the images showcasing our projects and fieldwork.
            </p>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div
                        className="project-card"
                        key={index}
                        onClick={() => handleImageClick(image)}
                        style={{ 
                            cursor: 'pointer', 
                            animationDelay: `${index * 0.2}s`
                        }}
                    >
                        <img
                            src={image.src}
                            alt={`Gallery ${index + 1}`}
                            className={`gallery-image ${expandedImage === image ? 'expanded' : ''}`}
                        />
                        <p className="gallery-caption">{image.caption}</p>
                    </div>
                ))}
            </div>
            {expandedImage && (
                <div className="expanded-image-container">
                    <img src={expandedImage.src} alt={expandedImage.caption} className="expanded-image" />
                    <button onClick={() => setExpandedImage(null)}>Close</button>
                </div>
            )}
        </section>
    );
}
