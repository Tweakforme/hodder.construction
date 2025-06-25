import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const InteractiveMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    // Prevent double initialization
    if (isInitializedRef.current) return;

    // Load Leaflet CSS
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
      document.head.appendChild(link);
    }

    // Load Leaflet JS dynamically
    if (!window.L) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
      script.async = true;
      script.onload = () => {
        initMap();
      };
      document.head.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      // Double-check we haven't already initialized
      if (isInitializedRef.current || !mapRef.current || mapInstanceRef.current) return;

      try {
        // 419 Mt Paul Way, Kamloops coordinates
        const hodderCoords = [50.684728, -120.322681];
        
        const mapInstance = window.L.map(mapRef.current, {
          center: hodderCoords,
          zoom: 15,
          zoomControl: false,
          attributionControl: false
        });

        window.L.control.zoom({
          position: 'bottomright'
        }).addTo(mapInstance);

        window.L.control.attribution({
          position: 'bottomleft',
          prefix: false
        }).addTo(mapInstance);

        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(mapInstance);

        // Add marker for Hodder Construction
        window.L.marker(hodderCoords)
          .addTo(mapInstance)
          .bindPopup('<b>Hodder Construction</b><br>419 Mt Paul Way, Kamloops, BC')
          .openPopup();

        // Store the map instance
        mapInstanceRef.current = mapInstance;
        isInitializedRef.current = true;

      } catch (error) {
        console.error('Map initialization error:', error);
        // Reset flags if there was an error
        isInitializedRef.current = false;
        mapInstanceRef.current = null;
      }
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (error) {
          console.error('Map cleanup error:', error);
        }
        mapInstanceRef.current = null;
        isInitializedRef.current = false;
      }
    };
  }, []); // Empty dependency array

  return (
    <div className="lg:col-span-2">
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl overflow-hidden border border-gray-600 relative z-0">
        <div
          ref={mapRef}
          className="h-96 w-full relative z-0"
          style={{ background: '#1f2937' }}
        >
          {/* Fallback */}
          <div className="h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Loading Map...</h3>
              <p className="text-gray-400">Hodder Construction Location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;