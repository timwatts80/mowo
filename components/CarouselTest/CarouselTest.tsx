import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomerCases from 'components/CustomerCases/CustomerCases';


  
  const imageItems = [
    {
      thumbnailUrl: 'https://img.icons8.com/?size=512&id=jf29BYdVb4ah&format=png',
      imageUrl: <CustomerCases />,
    },
    {
      thumbnailUrl: 'https://img.icons8.com/?size=512&id=mkkp6yt38FVq&format=png',
      imageUrl: 'https://loremflickr.com/320/240/dog',
    },
    // ... Add more items as needed
  ];

function CarouselTest(): JSX.Element {
  const [selectedImageUrl, setSelectedImageUrl] = useState(imageItems[0].imageUrl);

  const settings = {
    dots: true, 
    slidesToShow: 1,     
    slidesToScroll: 1,   
    infinite: true, 
    arrows: true,   
    responsive: [
      // Responsive settings
    ],
  };
  

  return (
    <div className="carousel-container" style={{ width: '75%', margin: '0 auto'}}>
      <div className="main-image">
        {selectedImageUrl}
      </div>
      <Slider {...settings}>
        {imageItems.map((item, index) => (
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