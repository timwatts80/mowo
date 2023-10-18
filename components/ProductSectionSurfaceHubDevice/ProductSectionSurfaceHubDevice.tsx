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

const Intro: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `24px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const SurfaceInnovationSpan1: any = styled('span', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize:
    data.currentVariant === 'ScreenTablet'
      ? `48px`
      : data.currentVariant === 'ScreenMobile'
      ? `34px`
      : `60px`,
  letterSpacing:
    data.currentVariant === 'ScreenTablet'
      ? `-1.44px`
      : data.currentVariant === 'ScreenMobile'
      ? `-1.36px`
      : `-3px`,
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
})(({ theme, data }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 164, 239, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize:
    data.currentVariant === 'ScreenTablet'
      ? `48px`
      : data.currentVariant === 'ScreenMobile'
      ? `34px`
      : `60px`,
  letterSpacing:
    data.currentVariant === 'ScreenTablet'
      ? `-1.44px`
      : data.currentVariant === 'ScreenMobile'
      ? `-1.36px`
      : `-3px`,
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
})(({ theme, data }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle:
    data.currentVariant === 'ScreenTablet'
      ? theme.typography['Typography']['H3'].fontStyle
      : data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].fontStyle
      : theme.typography['Typography']['H2'].fontStyle,
  fontFamily:
    data.currentVariant === 'ScreenTablet'
      ? theme.typography['Typography']['H3'].fontFamily
      : data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].fontFamily
      : theme.typography['Typography']['H2'].fontFamily,
  fontWeight:
    data.currentVariant === 'ScreenTablet'
      ? theme.typography['Typography']['H3'].fontWeight
      : data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].fontWeight
      : theme.typography['Typography']['H2'].fontWeight,
  fontSize:
    data.currentVariant === 'ScreenTablet'
      ? theme.typography['Typography']['H3'].fontSize
      : data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].fontSize
      : theme.typography['Typography']['H2'].fontSize,
  letterSpacing:
    data.currentVariant === 'ScreenTablet'
      ? theme.typography['Typography']['H3'].letterSpacing
      : data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].letterSpacing
      : theme.typography['Typography']['H2'].letterSpacing,
  lineHeight:
    data.currentVariant === 'ScreenTablet'
      ? theme.typography['Typography']['H3'].lineHeight
      : data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].lineHeight
      : theme.typography['Typography']['H2'].lineHeight,
  textDecoration:
    data.currentVariant === 'ScreenTablet'
      ? theme.typography['Typography']['H3'].textDecoration
      : data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].textDecoration
      : theme.typography['Typography']['H2'].textDecoration,
  textTransform:
    data.currentVariant === 'ScreenTablet'
      ? theme.typography['Typography']['H3'].textTransform
      : data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].textTransform
      : theme.typography['Typography']['H2'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const UnleashingPotentialI: any = styled('div')(({ theme }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(105, 105, 105, 1)`,
  fontStyle: theme.typography['Typography']['H5'].fontStyle,
  fontFamily: theme.typography['Typography']['H5'].fontFamily,
  fontWeight: theme.typography['Typography']['H5'].fontWeight,
  fontSize: theme.typography['Typography']['H5'].fontSize,
  letterSpacing: theme.typography['Typography']['H5'].letterSpacing,
  lineHeight: theme.typography['Typography']['H5'].lineHeight,
  textDecoration: theme.typography['Typography']['H5'].textDecoration,
  textTransform: theme.typography['Typography']['H5'].textTransform,
  alignSelf: `stretch`,
  margin: `20px 0px 0px 0px`,
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
        <Intro>
          <SurfaceInnovation data={data}>
            <SurfaceInnovationSpan1
              data={data}
            >{`Surface `}</SurfaceInnovationSpan1>
            <SurfaceInnovationSpan2
              data={data}
            >{`Innovation`}</SurfaceInnovationSpan2>
          </SurfaceInnovation>
          <UnleashingPotentialI>
            {`Unleashing Potential in Your Modern Workplace`}
          </UnleashingPotentialI>
        </Intro>
        <Box1>
          <ProductCarousel1 />
        </Box1>
      </Rows>
    </ScreenDesktop>
  );
}

export default ProductSectionSurfaceHubDevice;
