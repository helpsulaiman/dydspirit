import React, { useEffect } from 'react';
import './contact.css';

export function Contact() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const emailAddress = "dydspirit@gmail.com";
    const phoneNumber = "+91 97970 06187";

    return (
        <section id="contact" className="contact-section animate-on-scroll">
            <h2 className="contact-title animate-on-scroll">Contact Us</h2>
            <div className="contact-container">
                <div className="contact-info animate-on-scroll">
                    <h3>Get in Touch</h3>
                    <p>Have questions? We'd love to hear from you.</p>
                    <div className="contact-details">
                        <div className="contact-card" onClick={() => window.location.href = `mailto:${emailAddress}`}>
                            <div className="card-icon">✉️</div>
                            <h4 className="card-title">Email</h4>
                            <p>{emailAddress}</p>
                        </div>
                        <div className="contact-card" onClick={() => window.location.href = `tel:${phoneNumber}`}>
                            <div className="card-icon">📞</div>
                            <h4 className="card-title">Phone</h4>
                            <p>{phoneNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
