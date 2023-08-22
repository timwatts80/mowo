/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import ProductCard from 'components/ProductCard/ProductCard';
import { ProductCarouselTempProps } from 'types';
import useProductCarouselTemp from 'components/ProductCarouselTemp/useProductCarouselTemp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductList1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '75%',
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const ProductCard1: any = styled(ProductCard)(({ theme }: any) => ({
  zIndex: `0`,
  margin: `0px auto`,
}));

function ProductCarouselTemp(props: ProductCarouselTempProps): JSX.Element {
  const { data } = useProductCarouselTemp();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1439, // tablet breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1104, // tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 572, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div style={{ width: '80%', maxWidth: '1440px', margin: '0 auto',}}>
      <Slider {...settings}>
        {data.products &&
          data.products.map((product: any, index: number) => {
            return <ProductCard1 key={index} {...product} />;
          })}
      </Slider>
    </div>
  );
}

export default ProductCarouselTemp;
