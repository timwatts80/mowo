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
import ProductCardNew from 'components/ProductCardNew/ProductCardNew';
import { ProductCardListProps } from 'types';
import useProductCardList from 'components/ProductCardList/useProductCardList';

const ProductCardList1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  flexDirection: `row`,
  isolation: `isolate`,
  width: '100%',
  gridTemplateColumns: `repeat(auto-fit, minmax(311px, 1fr))`,
  height: 'auto',
  columnGap: '30px',
  alignItems: `center`,
  padding: `48px`,
  boxSizing: `border-box`,
});

const ProductCardNew1: any = styled(ProductCardNew)(({ theme }: any) => ({
  width: `311px`,
  height: `448px`,
  zIndex: `0`,
  margin: `0px`,
}));

function ProductCardList(props: ProductCardListProps): JSX.Element {
  const { data } = useProductCardList();

  return (
    <ProductCardList1 className={props.className} gap={'20px'}>
      {data.items &&
        data.items.map((item: any, index: number) => {
          return <ProductCardNew1 key={index} {...item} />;
        })}
    </ProductCardList1>
  );
}

export default ProductCardList;
