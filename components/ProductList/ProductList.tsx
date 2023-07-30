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
import ProductBox from 'components/ProductBox/ProductBox';
import { ProductListProps } from 'types';
import useProductList from 'components/ProductList/useProductList';

const ProductList1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const ProductBox1: any = styled(ProductBox)(({ theme }: any) => ({
  width: `311px`,
  zIndex: `0`,
  margin: `0px`,
}));

function ProductList(props: ProductListProps): JSX.Element {
  const { data } = useProductList();

  return (
    <ProductList1 className={props.className}>
      {data.products &&
        data.products.map((product: any, index: number) => {
          const props = { key: product.id, id: index + 1, isProduct: data[`isProduct${index + 1}`] };
          console.log(props);
          return <ProductBox1 {...props} />;
        })}
    </ProductList1>
  );
}

export default ProductList;
