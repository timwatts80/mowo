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
import SectionHeader from 'components/SectionHeader/SectionHeader';
import ProductCarousel from 'components/ProductCarousel/ProductCarousel';
import { ProductSectionSurfaceHubDeviceProps } from 'types';
import useProductSectionSurfaceHubDevice from 'components/ProductSectionSurfaceHubDevice/useProductSectionSurfaceHubDevice';

const ScreenDesktop: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
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
  borderRadius: `0px`,
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

const SectionHeader1: any = styled(SectionHeader, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  width:
    data.currentVariant === 'ScreenTablet'
      ? `768px`
      : data.currentVariant === 'ScreenMobile'
      ? `375px`
      : `1440px`,
  margin: `0px`,
}));

const Box1: any = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 0)`,
  borderRadius: `0px`,
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
        <SectionHeader1 data={data} {...props} />
        <Box1>
          <ProductCarousel1 />
        </Box1>
      </Rows>
    </ScreenDesktop>
  );
}

export default ProductSectionSurfaceHubDevice;
