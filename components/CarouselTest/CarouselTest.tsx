import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientCaseStudy from 'components/ClientCaseStudy/ClientCaseStudy';
import ClientLogoCard from 'components/ClientLogoCard/ClientLogoCard';
import useCarouselTest from './useCarouselTest';


function CarouselTest(): JSX.Element {
    const { data } = useCarouselTest();
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
        <div className="carousel-container" style={{ width: '75%', margin: '0 auto' }}>
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
                        {item.thumbnailUrl}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CarouselTest;