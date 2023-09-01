import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useProductThumbCarousel from './useProductThumbCarousel';
import useProductCarouselTemp from 'components/ProductCarousel/useProductCarousel';
import { ProductThumbCarouselProps } from 'types';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import ReactPlayer from 'react-player';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleOutline';

const CarouselContainer: any = styled('div')(({ data }: any) => {
    const ScreenMobile = useMediaQuery('(max-width:497px)');
    const ScreenTablet = useMediaQuery('(max-width:999px)');
    const paddingValue = ScreenMobile ? `0px` : ScreenTablet ? `0px` : `0px`;

    return {
        position: `relative`,
        isolation: `isolate`,
        flexDirection: `row`,
        width: `100%`,
        justifyContent: `flex-start`,
        alignItems: `center`,
        padding: paddingValue,
        boxSizing: `border-box`,
        height: 'auto',
    };
});

const MainImage: any = styled('div')({
    position: `relative`,
    width: `100%`,
});

const ImageContainer: any = styled('div')({
    margin: `0 auto 20px`,
    width: `100%`,
    height: `auto`,
    maxWidth: `476px`,
});

const Image: any = styled('div')({
    position: `relative`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    width: `100%`,
    height: `280px`,
});

const ThumbnailContainer = styled('div')({
    position: 'relative',
    width: '100%',
    height: '75px',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

function ProductThumb({ src, alt, className, onClick, isVideo }: any): JSX.Element {
    return (
        <ThumbnailContainer
            className={className}
            onClick={onClick}
            style={{
                backgroundImage: isVideo ? 'none' : `url(${src})`,
                backgroundColor: isVideo ? 'black' : 'transparent',
                backgroundSize: isVideo ? 'unset' : 'contain',
                backgroundRepeat: isVideo ? 'unset' : 'no-repeat',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: `4px`,
                position: 'relative',
                cursor: `pointer`,
            }}
        >
            {isVideo && (
                <div
                    className="video-overlay"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 1, 
                    }}
                >
                    <PlayCircleFilledIcon
                        style={{
                            color: 'white',
                            fontSize: '48px',
                            transition: 'opacity 0.1s ease-in-out',
                        }}
                        className="play-icon" 
                    />
                </div>
            )}
        </ThumbnailContainer>
    );
}

function CarouselTest(props: ProductThumbCarouselProps): JSX.Element {
    const { data } = useProductCarouselTemp();
    const selectedProductImages = data.products[props.product_id]?.images || [];
  
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
    const settings = {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        responsive: [
            // Responsive settings
            {
                breakpoint: 1104, // tablet breakpoint
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 572, // mobile breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ],
    };
  
    const handleThumbnailClick = (index: number) => {
      setSelectedImageIndex(index);
    };
  
    const selectedImage = selectedProductImages[selectedImageIndex];
    const isVideo = selectedImage?.type === 'video';

    return (
        <CarouselContainer className="thumb-carousel-container">
            <MainImage className="main-image">
                <ImageContainer className="image-container">
                    {isVideo ? (
                        <ReactPlayer url={selectedImage?.src} controls width="100%" height="280px" />
                    ) : (
                        <Image style={{ backgroundImage: `url(${selectedImage?.src})` }} alt={selectedImage?.alt} />
                    )}
                </ImageContainer>
            </MainImage>
            <Slider {...settings}>
                {selectedProductImages.map((image: any, index: number) => (
                    <ProductThumb
                        key={index}
                        src={image.src}
                        alt={`Thumbnail ${index + 1}`}
                        className={`thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                        isVideo={image.type === 'video'} // Pass whether the thumbnail is a video
                    />
                ))}
            </Slider>
        </CarouselContainer>
    );
  }
  
  export default CarouselTest;
  

// function CarouselTest(props: ProductThumbCarouselProps): JSX.Element {
//     const { data } = useProductCarouselTemp();

//     const selectedProductImages = data.products[props.product_id]?.images || [];

//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//     const settings = {
//         dots: false,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//         arrows: true,
//         responsive: [
//             // Responsive settings
//             {
//                 breakpoint: 1104, // tablet breakpoint
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 572, // mobile breakpoint
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 }
//             }
//         ],
//     };

//     const handleThumbnailClick = (index: number) => {
//         setSelectedImageIndex(index);
//       };
    

//     return (  
//         <CarouselContainer className="thumb-carousel-container" >
//             <MainImage className="main-image">
//                 <ImageContainer className="image-container">
//                     <Image src={selectedProductImages[selectedImageIndex]?.src} alt={selectedProductImages[selectedImageIndex]?.alt} />
//                 </ImageContainer>
//             </MainImage>
//             <Slider {...settings}>
//                 {selectedProductImages &&
//                     selectedProductImages.map((image: any, index: number) => (
//                         <ProductThumb
//                             key={index}
//                             src={image.src}
//                             alt={`Thumbnail ${index + 1}`}
//                             className={`thumbnail ${selectedImageIndex === index && selectedImageIndex === index ? 'active' : ''}`}
//                             onClick={() => handleThumbnailClick(index)}
//                         />
//                         )
//                         )}
//             </Slider>
//         </CarouselContainer>
//     );
// }

// export default CarouselTest;
