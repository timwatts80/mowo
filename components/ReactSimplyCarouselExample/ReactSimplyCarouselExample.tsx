import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import ProductCard from '../ProductCard/ProductCard';
import useProductCard from 'components/ProductCard/useProductCard';
import useProductList from 'components/ProductList/useProductList';
import styled from '@emotion/styled';
import { ProductBoxProps, ProductListProps } from 'types';

const ProductList1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const ProductCard1: any = styled(ProductCard)(({ theme }: any) => ({
  zIndex: `0`,
  margin: `0px`,
}));

function ProductList(props: ProductListProps): JSX.Element {
  const { data } = useProductList();

  return (
    <ProductList1 className={props.className}>
      {data.products &&
        data.products.map((product: any, index: number) => {
          return <ProductCard1 key={index} />;
        })}
    </ProductList1>
  );
}



function ReactSimplyCarouselExample(props: ProductListProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { data } = useProductCard();

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
        <ProductList />
      </ReactSimplyCarousel>
    </div>
  );
}


export default ReactSimplyCarouselExample;