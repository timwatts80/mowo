import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import ProductBox from '../ProductBox/ProductBox';
import useProductBox from 'components/ProductBox/useProductBox';
import styled from '@emotion/styled';
import { ProductBoxProps, ProductListProps } from 'types';

const ProductList: any = styled('div')<ProductListProps>({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '311px',
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
});

function ReactSimplyCarouselExample(props: ProductListProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { data } = useProductBox();

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={350}
        easing="ease-out"
      >
        {/* map over the products to render a ProductCard component for each product */}
        
              <ProductBox isProduct1={false}/>
              <ProductBox isProduct2={true}/>
      
    

        {/* {data.products &&
          data.products.map((product: any, index: number) => {
            return (
              <ProductBox1
                key={index}
                id={product.id + index}
                isProduct={product.isProduct1 || product.isProduct2}
              />
            );
          })} */}

      </ReactSimplyCarousel>
    </div>
  );
}


export default ReactSimplyCarouselExample;