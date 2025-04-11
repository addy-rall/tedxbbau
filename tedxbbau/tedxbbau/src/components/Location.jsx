import React, { useEffect, useRef } from "react";

const LocationSection = () => {
  const mapRef = useRef(null);
  
  // Coordinates for Babasaheb Bhimrao Ambedkar University
  // Update these with your exact location
  const collegeLocation = {
    lat: 26.76490,
    lng: 80.93011
  };
  
  const collegeAddress = "Babasaheb Bhimrao Ambedkar University, Vidya Vihar, Raebareli Rd, Lucknow, Uttar Pradesh 226025, India";

  useEffect(() => {
    // Load Leaflet CSS
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
    document.head.appendChild(linkElement);
    
    // Load Leaflet JS
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
    script.async = true;
    
    script.onload = () => {
      initializeMap();
    };
    
    document.head.appendChild(script);

    return () => {
      // Clean up
      document.head.removeChild(linkElement);
      document.head.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    if (!mapRef.current || !window.L) return;
    
    // Initialize map
    const map = window.L.map(mapRef.current).setView([collegeLocation.lat, collegeLocation.lng], 15);
    
    // Add dark theme tile layer (CartoDB DarkMatter)
    window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);
    
    // Add custom marker with TEDx red color
    const customIcon = window.L.divIcon({
      className: 'custom-map-marker',
      html: `<div style="
        width: 24px;
        height: 24px;
        background-color: #e62b1e;
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      "></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
    
    // Add marker
    const marker = window.L.marker([collegeLocation.lat, collegeLocation.lng], {icon: customIcon}).addTo(map);
    
    marker.bindPopup(`
      <div style="min-width: 200px; text-align: center;">
        <h3 style="margin: 0; font-size: 16px; color: #333;">Babasaheb Bhimrao Ambedkar University</h3>
        <p style="margin: 5px 0 0; color: #666;">Venue for TEDx Event</p>
      </div>
    `).openPopup();
  };

  return (
    <div className="relative min-h-[500px] bg-black text-white py-16 px-6" style={{ zIndex: 1 }}>
      <h1 className="text-5xl font-bold mb-12 relative z-10 w-full text-center">Our Location</h1>
      
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-8">
        {/* Map Container - Left side on laptop */}
        <div className="w-full md:w-1/2 h-[400px] relative rounded-lg overflow-hidden border-4 border-red-500 shadow-lg" style={{ boxShadow: "0 0 20px rgba(255, 0, 0, 0.2)", zIndex: 1 }}>
          <div 
            ref={mapRef} 
            className="w-full h-full bg-gray-900"
            style={{ zIndex: 1 }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg z-0">
              Loading map...
            </div>
          </div>
        </div>
        
        {/* Address Details - Right side on laptop */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 rounded-lg bg-gray-900 border-4 border-red-500 shadow-lg" style={{ boxShadow: "0 0 20px rgba(255, 0, 0, 0.2)", zIndex: 1 }}>
          <h2 className="text-3xl font-bold mb-6 text-red-500">Visit Us</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Address
            </h3>
            <p className="text-lg">
              Babasaheb Bhimrao Ambedkar University<br />
              Vidya Vihar, Raebareli Rd<br />
              Lucknow, Uttar Pradesh 226025<br />
              India
            </p>
          </div>
          
          
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Event Venue
            </h3>
            <p className="text-lg">
              Auditorium, Central Building<br />
              Babasaheb Bhimrao Ambedkar University
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a 
              href={`https://maps.app.goo.gl/AfAU1MrD7cvhWVoA7`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-medium"
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </span>
            </a>
            
            <a 
              href={`tel:1800-180-5789`}
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition font-medium"
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;