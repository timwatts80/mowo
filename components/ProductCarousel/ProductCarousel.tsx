import React from 'react';
import ProductBox from 'components/ProductBox/ProductBox';
import { ProductBoxProps } from 'types';

function ProductBoxContainer(): JSX.Element {
  const productBoxProps: ProductBoxProps[] = [
    { data: { isProduct: true } },
    { data: { isProduct2: true } },
    { data: { isProduct3: true } },
    { data: { isProduct4: true } },
    { data: { isProduct5: true } },
    { data: { isProduct6: true } },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {productBoxProps.map((props, index) => (
        <ProductBox key={index} {...props} />
      ))}
    </div>
  );
}

export default ProductBoxContainer;