import React, { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import './Commercial.css';
import imagePath from './utils/imagePath';

const images = [
      { id: 4, src: '_DSC1053-2.jpg', alt: 'vertical knife' },
      { id: 9, src: '_DSC1033-4.jpg', alt: 'Commercial 9' },
  { id: 15, src: '_DSC0991.jpg', alt: 'Commercial 15' },
    { id: 5, src: '_DSC1040-3.jpg', alt: 'Hammock 1' },
  { id: 2, src: '_DSC1061-2.jpg', alt: 'Headlamp' },
    
  
{ id: 1, src: '_DSC1062-2.jpg', alt: 'Steel Will Knives in Glacier NP'},

  { id: 11, src: '_DSC1032.jpg', alt: 'Commercial 11' },
  
  { id: 13, src: '_DSC1002-2.jpg', alt: 'Commercial 13' },
  { id: 14, src: '_DSC0993-2.jpg', alt: 'Commercial 14' },
  { id: 3, src: '_DSC1060-2.jpg', alt: 'Commercial 7' },
  
  { id: 16, src: '_DSC0985.jpg', alt: 'Commercial 16' },
    { id: 10, src: '_DSC1033-3.jpg', alt: 'Commercial 10' },

  //{ id: 17, src: '_DSC6190.jpg', alt: 'Commercial 17' },
  //{ id: 18, src: '_DSC2170.jpg', alt: 'Commercial 18' },
  //{ id: 19, src: '_DSC2839.jpg', alt: 'Commercial 19' },
  //{ id: 20, src: '_DSC4988.jpg', alt: 'Commercial 20' },
  //{ id: 21, src: '_DSC4019.jpg', alt: 'Commercial 21' },
  //{ id: 22, src: '_DSC3991.jpg', alt: 'Commercial 22' },
  //{ id: 23, src: '_DSC4390.jpg', alt: 'Commercial 23' },
 // { id: 24, src: '_DSC7142-2.jpg', alt: 'Commercial 24' },
  //{ id: 25, src: '_DSC4685-2.jpg', alt: 'Commercial 25' },
  //{ id: 27, src: '_DSC7999-4.jpg', alt: 'Commercial 27' },
  ///{ id: 30, src: 'DSC_2494.jpg', alt: 'Commercial 30' },
  //{ id: 26, src: '_DSC6942.jpg', alt: 'Commercial 26' },
  //{ id: 31, src: '_DSC7951-2.jpg', alt: 'Commercial 31' },
  //{ id: 32, src: '_DSC2193-2.jpg', alt: 'Commercial 32' },
];

const Portraits = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Initialize the gallery
    const gallery = document.createElement('div');
    gallery.className = 'pswp-gallery';
    galleryRef.current.appendChild(gallery);

    // Add images to the gallery
    images.forEach((image) => {
      const figure = document.createElement('figure');
      figure.className = 'gallery-item';
      
      const img = document.createElement('picture');
      const source = document.createElement('source');
      const webpSrc = imagePath(image.src.replace(/\.(jpg|jpeg|png)$/, '.webp'));
      source.srcSet = webpSrc;
      source.type = 'image/webp';
      img.appendChild(source);

      const imgElement = document.createElement('img');
      imgElement.src = imagePath(image.src); // Fallback to original JPG
      imgElement.alt = image.alt;
      imgElement.loading = 'lazy';
      
      img.appendChild(imgElement);
      figure.appendChild(img);
      gallery.appendChild(figure);
    });

    // Initialize PhotoSwipe
    const lightbox = new PhotoSwipeLightbox({
      gallery: '.pswp-gallery',
      children: 'figure',
      pswpModule: () => import('photoswipe')
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      gallery.remove();
    };
  }, []);

  return (
    <div className="portfolio-page">
      <div ref={galleryRef} className="gallery-container" />
    </div>
  );
};

export default Portraits;