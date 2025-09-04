import React, { useEffect } from 'react';
import './Services.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-container">
      <div className="services-content">
        <div className="services-header">
          <h1>Services</h1>
          <p>Professional portrait photography sessions</p>
        </div>
        
        <div className="services-sections">
          <div className="service-section">
            <h2>Digital Portrait Sessions</h2>
            <div className="pricing-options">
              <div className="pricing-option">
                <h3>Mini Session</h3>
                <p className="session-details">30–45 min, 10–15 edited images</p>
                <p className="price">225</p>
              </div>
              <div className="pricing-option">
                <h3>Standard Session</h3>
                <p className="session-details">1–1.5 hr, 25–35 edited images</p>
                <p className="price">400</p>
              </div>
              <div className="pricing-option">
                <h3>Premium Session</h3>
                <p className="session-details">2+ hr, multiple looks/locations, 50+ edited images</p>
                <p className="price">650</p>
              </div>
            </div>
          </div>

          <div className="service-section">
            <h2>Film Portrait Sessions</h2>
            <p className="film-description">
              (includes dev + scans, and editing delivered as high-res digital files)
            </p>
            <div className="pricing-options">
              <div className="pricing-option">
                <h3>Mini Session</h3>
                <p className="session-details">1 roll / ~12 usable frames</p>
                <p className="price">325</p>
              </div>
              <div className="pricing-option">
                <h3>Standard Session</h3>
                <p className="session-details">2 rolls / ~24 usable frames</p>
                <p className="price">500</p>
              </div>
              <div className="pricing-option">
                <h3>Premium Session</h3>
                <p className="session-details">3–4 rolls / ~36–48 usable frames</p>
                <p className="price">800</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;