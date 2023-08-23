import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageItem {
  thumbnailUrl: string;
  imageUrl: string;
}

const settings = {
  slidesToShow: 5,      // Number of thumbnails visible at a time
  slidesToScroll: 1,    // Number of thumbnails to scroll
  infinite: false,      // Carousel doesn't wrap around
  responsive: [
    // Responsive settings go here if needed
  ],
};

const imageItems: ImageItem[] = [
  {
    thumbnailUrl: 'https://img.icons8.com/?size=512&id=jf29BYdVb4ah&format=png',
    imageUrl: 'https://loremflickr.com/320/240',
  },
  {
    thumbnailUrl: 'https://img.icons8.com/?size=512&id=mkkp6yt38FVq&format=png',
    imageUrl: 'https://loremflickr.com/320/240',
  },
  // ... Add more items as needed
];

function CarouselTest() {
  const [selectedImageUrl, setSelectedImageUrl] = useState(imageItems[0].imageUrl);

  // ...

  return (
    <div className="carousel-container">
      <div className="main-image">
        <img src={selectedImageUrl} alt="Selected Product" />
      </div>
      <Slider {...settings}>
        {imageItems.map((item: ImageItem, index: number) => (
          <div
            key={index}
            className="thumbnail"
            onClick={() => setSelectedImageUrl(item.imageUrl)}
          >
            <img src={item.thumbnailUrl} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselTest;