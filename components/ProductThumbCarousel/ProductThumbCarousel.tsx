import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientCaseStudy from 'components/ClientCaseStudy/ClientCaseStudy';
import ClientLogoCard from 'components/ClientLogoCard/ClientLogoCard';
import useProductThumbCarousel from './useProductThumbCarousel';
import useProductCardList from 'components/ProductCardList/useProductCardList';
import { ProductThumbCarouselProps } from 'types';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';

const CarouselContainer: any = styled('div')(({ data }: any) => {
    const ScreenMobile = useMediaQuery('(max-width:497px)');
    const ScreenTablet = useMediaQuery('(max-width:999px)');
    const paddingValue = ScreenMobile ? `0px` : ScreenTablet ? `0px` : `0px`;

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
    position: `relative`,
    width: `100%`,
});

const ImageContainer: any = styled('div')({
    margin: `0 auto`,
    width: `100%`,
    height: `auto`,
    maxWidth: `476px`,
});

const Image: any = styled('img')({
    position: `relative`,
    width: `100%`,
});
const ProductThumb: any = styled('img')({
    maxWidth: `100px`,
});

function CarouselTest(props: ProductThumbCarouselProps): JSX.Element {
    const { data } = useProductThumbCarousel();

    const [selectedImageUrl, setSelectedImageUrl] = useState(data.clientCases[0]);

    const settings = {
        dots: false,
        slidesToShow: 3,
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
            <MainImage className="main-image">
                <ImageContainer className="image-container">
                    <Image src={selectedImageUrl.image.src} />
                </ImageContainer>
            </MainImage>
            <Slider {...settings}>
                {data.clientCases &&
                    data.clientCases.map((item: any, index: number) => (
                        <div
                            key={index}
                            {...item}
                            className="thumbnail"
                            onClick={() => handleThumbnailClick(item)}
                        >
                            <ProductThumb src={item.image.src} />
                        </div>
                    ))}
            </Slider>
        </CarouselContainer>
    );
}

export default CarouselTest;