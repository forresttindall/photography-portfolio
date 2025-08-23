import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import './HomePage.css';
import imagePath from './utils/imagePath';

const categories = [
    {
    name: 'Film',
    image: '14.jpg',
    textColor: 'white',
  },
  {
    name: 'Commercial',
    image: '_DSC6969.jpg',
    textColor: 'white'
  },
  {
    name: 'Outdoor',
    image: '_DSC1672-2.jpg',
    textColor: 'white'
  },

  {
    name: 'Film',
    image: '5.jpg',
    textColor: 'white',
  },
  {
    name: 'Commercial',
    image: '_DSC9182.jpg',
    textColor: 'white'
  },

  {
    name: 'Outdoor',
    image: '_DSC9596.jpg',
    textColor: 'white'
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === categories.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <Navigation textColor={categories[currentIndex].textColor} />
      {categories.map((category, index) => (
        <div key={`${category.name}-${index}`} className={`category-slide ${index === currentIndex ? 'active' : ''}`}>
          <img 
            src={imagePath(category.image)} 
            alt={category.name} 
            loading="lazy" 
            srcSet={`${imagePath(category.image)} 1x, ${imagePath(category.image)} 2x`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div className="category-name" style={{ color: category.textColor }}>
            {category.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
