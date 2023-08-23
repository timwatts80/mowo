import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientCaseStudy from 'components/ClientCaseStudy/ClientCaseStudy';
import ClientLogoCard from 'components/ClientLogoCard/ClientLogoCard';
import useCarouselTest from './useCarouselTest';
import { ClientCaseCarouselProps } from 'types';


function CarouselTest(props: ClientCaseCarouselProps): JSX.Element {
    const { data } = useCarouselTest();

    const [selectedImageUrl, setSelectedImageUrl] = useState(data.clientCases[0]);

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

    const handleThumbnailClick = (item: any) => {
        setSelectedImageUrl(item);
    };

    return (
        <div className="carousel-container" style={{ width: '75%', margin: '50px auto 250px', height: 'auto' }}>
            <Slider {...settings}>
                {data.clientCases &&
                    data.clientCases.map((item: any, index: number) => (
                        <div
                            key={index}
                            {...item}
                            className="thumbnail"
                            onClick={() => handleThumbnailClick(item)}
                        >
                            <ClientLogoCard logo={item.logo} />
                        </div>
                    ))}
            </Slider>
            <div className="main-image">
                <ClientCaseStudy
                    bgimage={selectedImageUrl.bgimage}
                    title={selectedImageUrl.title}
                    description={selectedImageUrl.description}
                />
            </div>
        </div>
    );
}

export default CarouselTest;