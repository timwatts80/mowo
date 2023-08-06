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
import ProductCardTemp from 'components/ProductCardTemp/ProductCardTemp';
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

const ProductCard1: any = styled(ProductCardTemp)(({ theme }: any) => ({
  zIndex: `0`,
  margin: `0px`,
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
        breakpoint: 1600, // tablet breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1104, // tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 572, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ maxWidth: '70%', margin: '0 auto' }}>
      <Slider {...settings}>
        {data.products &&
          data.products.map((product: any, index: number) => {
            return <ProductCard1 key={index} products={product} />;
          })}
      </Slider>
    </div>
  );
}

export default ProductCarouselTemp;