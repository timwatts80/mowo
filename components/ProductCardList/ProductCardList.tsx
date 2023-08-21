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
import SvgIcon from '@mui/material/SvgIcon';
import { SvgIcon } from '@mui/material';
import IconArrowLeft1 from 'public/assets/images/_IconArrowLeft.svg';
import { styled } from '@mui/material/styles';
import { ProductCardListProps } from 'types';
import useProductCardList from 'components/ProductCardList/useProductCardList';

const ProductCardList1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `48px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const SlideLeft: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width: `84px`,
  zIndex: `3`,
  margin: `0px`,
  cursor: `pointer`,
});

const IconArrowLeft2: any = styled(SvgIcon)({
  alignSelf: `stretch`,
  flex: `1`,
  position: `absolute`,
  left: `24px`,
  top: `343px`,
  margin: `0px`,
});

function ProductCardList(props: ProductCardListProps): JSX.Element {
  const { data, fns } = useProductCardList();

  return (
    <ProductCardList1 className={props.className} gap={'20px'}>
      {data.catalogitems &&
        data.catalogitems.map((item: any, index: number) => {
          return (
            <SlideLeft onClick={fns.goLeft} key={index}>
              <IconArrowLeft2
                fontSize={'inherit'}
                htmlColor="rgba(0, 0, 0, 1)"
                component={IconArrowLeft1}
              />
            </SlideLeft>
          );
        })}
    </ProductCardList1>
  );
}

export default ProductCardList;
