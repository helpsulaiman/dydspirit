/*import React from 'react';

export function Gallery() {
    const images = [
        { src: 'https://i.imgur.com/4lrTc5P.jpg', caption: 'Visit to MERC' },
        //{src: '/placeholder', caption: 'enter a caption' },
    ];

    return (
        <section id="gallery" style={{ 
            padding: '40px',
            textAlign: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <h2 style={{
                fontSize: '4rem',
                marginBottom: '1rem',
                color: '#2c3e50'
            }}>Gallery</h2>
            <p style={{
                fontSize: '1.4rem',
                lineHeight: '1.9',
                color: '#34495e',
                marginBottom: '2rem'
            }}>
                Take a look at some of the images showcasing our projects and fieldwork.
            </p>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                flexWrap: 'wrap', 
                gap: '30px' 
            }}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            padding: '13px',
                            borderRadius: '15px',
                            backgroundColor: '#fff',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                            ':hover': {
                                transform: 'translateY(-5px)'
                            }
                        }}
                    >
                        <img
                            src={image.src}
                            alt={`Gallery ${index + 1}`}
                            style={{
                                width: '350px',
                                height: '250px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                marginBottom: '4px',
                            }}
                        />
                        <p style={{ 
                            fontSize: '1.4rem', 
                            color: '#2c3e50',
                            fontWeight: '500'
                        }}>{image.caption}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
*/

import React, { useState } from 'react';
import './gallery.css';

export function Gallery() {
    const images = [
        { src: 'https://i.imgur.com/4lrTc5P.jpg', caption: 'Visit to MERC' },
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
                        style={{ cursor: 'pointer' }}
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
