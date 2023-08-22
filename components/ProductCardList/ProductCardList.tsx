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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SvgIcon } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';
import ProductCardNew from 'components/ProductCardNew/ProductCardNew';
import { ProductCardListProps } from 'types';
import useProductCardList from 'components/ProductCardList/useProductCardList';

const ProductCardList1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `48px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: '100%',
});

const Productlistcontainer: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  overflow: `hidden`,
  columnGap: `30px`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `100%`,
  height: `auto`,
  top: `0px`,
});


const Productcardcontainer: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  flexWrap: `wrap`,
  flex: '1 1 20%',
  justifyContent: `center`,
  alignItems: `center`,
  width: '100%',
  padding: `0px`,
  boxSizing: `border-box`,
  zIndex: `1`,
});
const SlideLeft: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `10px`,
  boxSizing: `border-box`,
  width: `131px`,
  height: `494px`,
  margin: `0px`,
  cursor: `pointer`,
});

const SlideRight: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `10px`,
  boxSizing: `border-box`,
  width: `131px`,
  height: `494px`,
  margin: `0px`,
  cursor: `pointer`,
});

const ProductCardNew1: any = styled(ProductCardNew)(({ theme }: any) => ({
  width: `311px`,
  height: `448px`,
  margin: `0px`,
}));

function ProductCardList(props: ProductCardListProps): JSX.Element {
  const { data, fns } = useProductCardList();

  return (
    <ProductCardList1 className={props.className} gap={'20px'}>
      <Productlistcontainer>
        <SlideLeft onClick={fns.goLeft}>
          <SvgIcon
            component={ArrowBackIcon}
            htmlColor={`rgba(0, 0, 0, 0.56)`}
          ></SvgIcon>
        </SlideLeft>

          {data.catalogitems &&
            data.catalogitems.map((item: any, index: number) => {
              return <ProductCardNew1 key={index} {...item} />;
            })}

        <SlideRight onClick={fns.goRight}>
          <SvgIcon
            component={ArrowForwardIcon}
            htmlColor={`rgba(0, 0, 0, 0.56)`}
          ></SvgIcon>
        </SlideRight>
      </Productlistcontainer>
    </ProductCardList1>
  );
}

export default ProductCardList;
