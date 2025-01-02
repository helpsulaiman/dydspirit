import React from 'react';
import image1 from './assets/images/image1.jpeg';

export function Gallery() {
    const images = [image1];

    return (
        <section id="gallery" style={{ padding: '20px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Gallery</h2>
            <p style={{ marginBottom: '20px' }}>
                Take a look at some of the images showcasing our projects and fieldwork.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                {images.map((src, index) => (
                    <div key={index} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
                        <img
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            style={{
                                width: '300px',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}