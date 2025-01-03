import React from 'react';
//import image1 from 'https://i.imgur.com/4lrTc5P.jpg';

export function Gallery() {
    // Updated array with images and captions
    const images = [
        { src: 'https://i.imgur.com/4lrTc5P.jpg', caption: 'Visit to MERC' },
        // Add more images as needed
        // { src: image2, caption: 'Another amazing project photo' },
    ];

    return (
        <section id="gallery" style={{ padding: '20px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Gallery</h2>
            <p style={{ marginBottom: '20px' }}>
                Take a look at some of the images showcasing our projects and fieldwork.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ddd',
                            padding: '10px',
                            borderRadius: '8px',
                            textAlign: 'center', // Center the caption
                        }}
                    >
                        <img
                            src={image.src}
                            alt={`Gallery ${index + 1}`}
                            style={{
                                width: '300px',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                marginBottom: '10px',
                            }}
                        />
                        {/* Caption */}
                        <p style={{ fontSize: '14px', color: '#555' }}>{image.caption}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}