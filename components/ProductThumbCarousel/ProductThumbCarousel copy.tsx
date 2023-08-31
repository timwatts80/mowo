import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientCaseStudy from 'components/ClientCaseStudy/ClientCaseStudy';
import ClientLogoCard from 'components/ClientLogoCard/ClientLogoCard';
import useProductThumbCarousel from './useProductThumbCarousel';
import useProductCarouselTemp from 'components/ProductCarouselTemp/useProductCarouselTemp';
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
        maxWidth: `400px`,
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
    const { data } = useProductCarouselTemp();

    const [selectedProductIndex, setSelectedProductIndex] = useState(0);
    const selectedProduct = data.products[selectedProductIndex];

    const handleThumbnailClick = (productIndex: number, imageIndex: number) => {
        setSelectedProductIndex(productIndex);
    };

    return (  
        <CarouselContainer className="thumb-carousel-container" {...props}>
            <MainImage className="main-image">
                <ImageContainer className="image-container">
                    <img src={selectedProduct.images[0].src} alt={selectedProduct.images[0].alt} />
                </ImageContainer>
            </MainImage>
            <div className="thumbnails">
                {selectedProduct.images.map((image: any, imageIndex: number) => (
                    <div key={imageIndex} className="thumbnail">
                        <img
                            src={image.src}
                            alt={image.alt}
                            onClick={() => handleThumbnailClick(selectedProductIndex, imageIndex)}
                        />
                    </div>
                ))}
            </div>
        </CarouselContainer>
    );
}

export default CarouselTest;

