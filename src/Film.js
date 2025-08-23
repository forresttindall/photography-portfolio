import React, { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import './Outdoor.css';
import imagePath from './utils/imagePath';

const images = [
  { id: 11, src: '14.jpg', alt: 'Outdoor 11' },
  { id: 1, src: '1.jpg', alt: 'Outdoor 1' },
  { id: 2, src: '3.jpg', alt: 'Outdoor 2' },
  { id: 3, src: '6.jpg', alt: 'Outdoor 3' },
  { id: 4, src: '5.jpg', alt: 'Outdoor 4' },
  { id: 5, src: '7.jpg', alt: 'Outdoor 5' },
  { id: 6, src: '8.jpg', alt: 'Outdoor 6' },
  { id: 7, src: '4.jpg', alt: 'Outdoor 7' },
  { id: 8, src: '11.jpg', alt: 'Outdoor 8' },
    { id: 11, src: '12.jpg', alt: 'Outdoor 11' },
  { id: 12, src: '13.jpg', alt: 'Outdoor 12' },
  { id: 9, src: '2.jpg', alt: 'Outdoor 9' },
  { id: 10, src: '9.jpg', alt: 'Outdoor 10' },
  { id: 12, src: '16.jpg', alt: 'Outdoor 12' },
  { id: 13, src: '17.jpg', alt: 'Outdoor 13' },
  { id: 14, src: '18.jpg', alt: 'Outdoor 14' },
  { id: 15, src: '19.jpg', alt: 'Outdoor 15' },
  { id: 16, src: '15.jpg', alt: 'Outdoor 16' },
  //{ id: 17, src: '_DSC2807-2.jpg', alt: 'Outdoor 17' },
  //{ id: 18, src: '_DSC2612.jpg', alt: 'Outdoor 18' },
  //{ id: 19, src: '_DSC2522.jpg', alt: 'Outdoor 19' },
  //{ id: 20, src: '_DSC2222.jpg', alt: 'Outdoor 20' },
  //{ id: 21, src: '_DSC2279.jpg', alt: 'Outdoor 21' },
  //{ id: 22, src: '_DSC2130.jpg', alt: 'Outdoor 22' },
  //{ id: 23, src: '_DSC2110.jpg', alt: 'Outdoor 23' },
  //{ id: 24, src: '_DSC3998.jpg', alt: 'Outdoor 24' },
  //{ id: 25, src: '_DSC9069-2.jpg', alt: 'Outdoor 25' },
  //{ id: 26, src: '_DSC1460-2.jpg', alt: 'Outdoor 26' },
  //{ id: 27, src: '_DSC4899.jpg', alt: 'Outdoor 27' },
  //{ id: 28, src: '_DSC7999-4.jpg', alt: 'Outdoor 28' },
  //{ id: 29, src: '_DSC6959-3.jpg', alt: 'Outdoor 29' },
  //{ id: 30, src: '_DSC8090.jpg', alt: 'Outdoor 30' },
];

const Outdoor = () => {
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
      imgElement.src = imagePath(image.src);
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

export default Outdoor;
