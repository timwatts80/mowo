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
import ProductCarousel from 'components/ProductCarousel/ProductCarousel';
import { ProductSectionSurfaceHubDeviceProps } from 'types';
import useProductSectionSurfaceHubDevice from 'components/ProductSectionSurfaceHubDevice/useProductSectionSurfaceHubDevice';
import SectionHeader from 'components/SectionHeader/SectionHeader';

const ScreenDesktop: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems:
    data.currentVariant === 'ScreenTablet'
      ? `flex-start`
      : data.currentVariant === 'ScreenMobile'
      ? `flex-start`
      : `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  overflow:
    data.currentVariant === 'ScreenTablet'
      ? `hidden`
      : data.currentVariant === 'ScreenMobile'
      ? `hidden`
      : 'unset',
}));

const Rows: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `60px 0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
  overflow: `hidden`,
});

const SurfaceInnovationSpan1: any = styled('span', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize:
    data.currentVariant === 'ScreenTablet'
      ? `48px`
      : data.currentVariant === 'ScreenMobile'
      ? `39px`
      : `56px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
}));

const SurfaceInnovationSpan2: any = styled('span', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  whiteSpace: `pre-wrap`,
  color:
    data.currentVariant === 'ScreenTablet'
      ? `rgba(0, 0, 0, 1)`
      : data.currentVariant === 'ScreenMobile'
      ? `rgba(0, 0, 0, 1)`
      : `rgba(0, 164, 239, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize:
    data.currentVariant === 'ScreenTablet'
      ? `48px`
      : data.currentVariant === 'ScreenMobile'
      ? `39px`
      : `56px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
}));

const SurfaceInnovation: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize:
    data.currentVariant === 'ScreenTablet'
      ? `48px`
      : data.currentVariant === 'ScreenMobile'
      ? `39px`
      : `56px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const UnleashingPotentialF: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize:
    data.currentVariant === 'ScreenTablet'
      ? `23px`
      : data.currentVariant === 'ScreenMobile'
      ? `20px`
      : `27px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
}));

const Box1: any = styled('div')({
  // backgroundImage: `url(assets/images/ProductSectionSurfaceHubdevices_Box.png)`,
  // backgroundPosition: `center`,
  // backgroundSize: `cover`,
  // backgroundRepeat: `no-repeat`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `24px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `568px`,
  margin: `15px 0px 0px 0px`,
});

const ProductCarousel1: any = styled(ProductCarousel)(({ theme }: any) => ({
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
}));

function ProductSectionSurfaceHubDevice(
  props: ProductSectionSurfaceHubDeviceProps
): JSX.Element {
  const { data } = useProductSectionSurfaceHubDevice();

  return (
    <ScreenDesktop className={props.className} data={data}>
      <Rows>
        <SectionHeader {...props}/>
        <Box1>
          <ProductCarousel1 />
        </Box1>
      </Rows> 
    </ScreenDesktop>
  );
}

export default ProductSectionSurfaceHubDevice;
