import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import ProductCard from '../ProductCard/ProductCard';
import useProductCard from 'components/ProductCard/useProductCard';

function ReactSimplyCarouselExample() {
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
            itemsToShow: 4,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={350}
        easing="ease-out"
      >
        {/* map over the products to render a ProductCard component for each product */}

        {Array.from({ length: 3 }).map((_, index) =>
  data.products.map((product: any) => (
    <ProductCard key={product.id} product={product} />
  ))
)}

      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;