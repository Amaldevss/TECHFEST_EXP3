import React, { useState } from 'react';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://img.magnific.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgT2ab7BdMRZC3x1ZAIBhwAnqAwjoxM-omTS9X8FlONPSNjmyuXS532B0&s=10",
    "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
  ];

  return (
    <div className="page">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt="TechFest" 
            onClick={() => setSelectedImage(src)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      {/* Pop-up Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer'
          }}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <span 
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                color: '#fff',
                fontSize: '30px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              &times;
            </span>
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '80vh', 
                borderRadius: '8px',
                objectFit: 'contain' 
              }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;