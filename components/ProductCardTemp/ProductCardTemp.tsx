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
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProductCardTempProps } from 'types';
import useProductCardTemp from 'components/ProductCardTemp/useProductCardTemp';

const ProductCardTemp1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(241, 241, 241, 0.95)`,
  borderRadius: `10px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: `496px`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px 0px 0px 0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
}));

const Imagecontainer: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const ProductImage: any = styled('div')({
  backgroundImage: `url(assets/images/ProductCardTemp_Product_Image.png)`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const Titlecontainer: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px 16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `32px 0px 0px 0px`,
});

const ProductTitle: any = styled('div')(({ theme }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  flex: `1`,
  margin: `0px`,
}));

const Descriptioncontainer: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px 16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `32px 0px 0px 0px`,
});

const Description: any = styled('div')(({ theme }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['MOWO']['black-75'],
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `-0.3199999928474426px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  flex: `1`,
  margin: `0px`,
}));

const ButtonOutlined: any = styled(Button)(({ theme }: any) => ({
  margin: `32px 0px 0px 0px`,
  color: theme.palette['Info']['Main'],
  fontStyle: theme.typography['Components']['Button Font - Medium'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Medium'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Medium'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Medium'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Medium'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Medium'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Medium'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Medium'].textTransform,
}));

const Bottomaccentcolor: any = styled('div', {
  shouldForwardProp: (prop: any) => !['props'].includes(prop.toString()),
})(({ theme, props }: any) => ({
  alignSelf: `stretch`,
  height: `16px`,
  margin: `32px 0px 0px 0px`,
  backgroundColor: props.products.stripeColor,
}));

function ProductCardTemp(props: ProductCardTempProps): JSX.Element {
  const { fns } = useProductCardTemp();

  return (
    <ProductCardTemp1 className={props.className}>
      <Imagecontainer>
        <ProductImage
          src={props.product.image}
          alt={'Product Image'}
          loading={'lazy'}
        ></ProductImage>
      </Imagecontainer>
      <Titlecontainer>
        <ProductTitle>{props.product.title}</ProductTitle>
      </Titlecontainer>
      <Descriptioncontainer>
        <Description>{props.product.description}</Description>
      </Descriptioncontainer>
      <ButtonOutlined
        variant="outlined"
        size={'medium'}
        color={'info'}
        disabled={false}
        onClick={fns.toggleDialogue}
      >
        {'Device Details'}
      </ButtonOutlined>
      <Bottomaccentcolor props={props}></Bottomaccentcolor>
    </ProductCardTemp1>
  );
}

export default ProductCardTemp;
