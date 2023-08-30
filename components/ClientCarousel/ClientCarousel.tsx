import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientCaseStudy from 'components/ClientCaseStudy/ClientCaseStudy';
import ClientLogoCard from 'components/ClientLogoCard/ClientLogoCard';
import useClientCarousel from './useClientCarousel';
import { ClientCaseCarouselProps } from 'types';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';

const CarouselContainer: any = styled('div')(({ data }: any) => {
    const ScreenMobile = useMediaQuery('(max-width:497px)');
    const ScreenTablet = useMediaQuery('(max-width:999px)');
    const paddingValue = ScreenMobile ? `0px` : ScreenTablet ? `30px` : `100px`;

    return {
        position: `relative`,
        isolation: `isolate`,
        flexDirection: `row`,
        width: '100%',
        justifyContent: `flex-start`,
        alignItems: `center`,
        padding: paddingValue,
        margin: '50px auto 125px',
        boxSizing: `border-box`,
        height: 'auto',
    };
});

const MainImage: any = styled('div')({
    marginTop: '50px',
});

function CarouselTest(props: ClientCaseCarouselProps): JSX.Element {
    const { data } = useClientCarousel();

    const [selectedImageUrl, setSelectedImageUrl] = useState(data.clientCases[0]);

    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        responsive: [
            // Responsive settings
            {
                breakpoint: 572, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
    };

    const handleThumbnailClick = (item: any) => {
        setSelectedImageUrl(item);
    };

    return (
        <CarouselContainer className="carousel-container">
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
            <MainImage className="main-image">
                <ClientCaseStudy
                    bgimage={selectedImageUrl.bgimage}
                    title={selectedImageUrl.title}
                    description={selectedImageUrl.description}
                />
            </MainImage>
        </CarouselContainer>
    );
}

export default CarouselTest;