import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([
    { thumbnail: 'https://picsum.photos/id/24/50/50', fullsize: 'https://picsum.photos/id/24/300/300' },
    { thumbnail: 'https://picsum.photos/id/40/50/50', fullsize: 'https://picsum.photos/id/40/300/300' },
    { thumbnail: 'https://picsum.photos/id/43/50/50', fullsize: 'https://picsum.photos/id/43/300/300' },
    { thumbnail: 'https://picsum.photos/id/77/50/50', fullsize: 'https://picsum.photos/id/77/300/300' },
    { thumbnail: 'https://picsum.photos/id/96/50/50', fullsize: 'https://picsum.photos/id/96/300/300' },
    { thumbnail: 'https://picsum.photos/id/103/50/50', fullsize: 'https://picsum.photos/id/103/300/300' },
    { thumbnail: 'https://picsum.photos/id/111/50/50', fullsize: 'https://picsum.photos/id/111/300/300' },
    { thumbnail: 'https://picsum.photos/id/112/50/50', fullsize: 'https://picsum.photos/id/112/300/300' },
    { thumbnail: 'https://picsum.photos/id/119/50/50', fullsize: 'https://picsum.photos/id/119/300/300' },
  ]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const showFullSize = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container">
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => showFullSize(index)}
          />
        ))}
      </div>
      <div className="separator"></div>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.fullsize}
            className={`fullsize ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
