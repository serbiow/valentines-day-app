import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PhotoCarousel = ({ photos }) => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={4000} // 4 segundos por slide
    >
      {photos.map((photo, index) => (
        <div key={index}>
          <img src={photo.url} alt={`Photo ${index + 1}`} />
          <p className="legend">{photo.text}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;