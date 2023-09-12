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
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProductThumbCarousel from 'components/ProductThumbCarousel/ProductThumbCarousel';
import Table from 'components/Table/Table';
import { ContentcontainerProps } from 'types';
import useContentcontainer from 'components/Contentcontainer/useContentcontainer';

const ScreenDesktop: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === 'ScreenTablet'
      ? `0px 30px 30px 30px`
      : data.currentVariant === 'ScreenMobile'
      ? `0px 16px 16px 16px`
      : `0px 48px 48px 48px`,
  boxSizing: `border-box`,
  height: 'auto',
}));

const Productinfo: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection:
    data.currentVariant === 'ScreenTablet'
      ? `column`
      : data.currentVariant === 'ScreenMobile'
      ? `column`
      : `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Imagecontainer: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
  width: '50%',
});

const ProductThumbCarousel1: any = styled(ProductThumbCarousel)(
  ({ theme }: any) => ({
    alignSelf: `stretch`,
    flex: `1`,
    margin: `0px`,
  })
);

const Details: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex:
    data.currentVariant === 'ScreenTablet'
      ? 'unset'
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `1`,
  margin:
    data.currentVariant === 'ScreenTablet'
      ? `32px 0px 0px 0px`
      : data.currentVariant === 'ScreenMobile'
      ? `32px 0px 0px 0px`
      : `0px 0px 0px 32px`,
}));

const Top: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Title: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: theme.typography['Typography']['H4'].fontStyle,
  fontFamily: theme.typography['Typography']['H4'].fontFamily,
  fontWeight: theme.typography['Typography']['H4'].fontWeight,
  fontSize: theme.typography['Typography']['H4'].fontSize,
  letterSpacing: theme.typography['Typography']['H4'].letterSpacing,
  lineHeight: theme.typography['Typography']['H4'].lineHeight,
  textDecoration: theme.typography['Typography']['H4'].textDecoration,
  textTransform: theme.typography['Typography']['H4'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Title1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: theme.typography['Typography']['H6'].fontStyle,
  fontFamily: theme.typography['Typography']['H6'].fontFamily,
  fontWeight: theme.typography['Typography']['H6'].fontWeight,
  fontSize: theme.typography['Typography']['H6'].fontSize,
  letterSpacing: theme.typography['Typography']['H6'].letterSpacing,
  lineHeight: theme.typography['Typography']['H6'].lineHeight,
  textDecoration: theme.typography['Typography']['H6'].textDecoration,
  textTransform: theme.typography['Typography']['H6'].textTransform,
  alignSelf: `stretch`,
  margin: `12px 0px 0px 0px`,
}));

const Description: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `26px 0px 0px 0px`,
});

const ExperienceAnExquisit: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(80, 80, 80, 1)`,
  fontStyle: theme.typography['Typography']['Body 2'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 2'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 2'].fontWeight,
  fontSize: theme.typography['Typography']['Body 2'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 2'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 2'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 2'].textDecoration,
  textTransform: theme.typography['Typography']['Body 2'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const DividerHorizontal: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `26px 0px 0px 0px`,
}));

const Frame186: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === 'ScreenMobile' ? `column` : `row`,
  justifyContent: `flex-start`,
  alignItems:
    data.currentVariant === 'ScreenMobile' ? `flex-start` : `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `26px 0px 0px 0px`,
}));

const Colors: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  alignSelf: data.currentVariant === 'ScreenMobile' ? `stretch` : 'unset',
}));

const ColorsAvailable: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Typography']['Subtitle 2'].fontStyle,
  fontFamily: theme.typography['Typography']['Subtitle 2'].fontFamily,
  fontWeight: theme.typography['Typography']['Subtitle 2'].fontWeight,
  fontSize: theme.typography['Typography']['Subtitle 2'].fontSize,
  letterSpacing: theme.typography['Typography']['Subtitle 2'].letterSpacing,
  lineHeight: theme.typography['Typography']['Subtitle 2'].lineHeight,
  textDecoration: theme.typography['Typography']['Subtitle 2'].textDecoration,
  textTransform: theme.typography['Typography']['Subtitle 2'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Colorswatches: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `12px 0px 0px 0px`,
});

const Color1: any = styled('img')({
  height: `32px`,
  width: `32px`,
  margin: `0px`,
});

const Color2: any = styled('img')({
  height: `32px`,
  width: `32px`,
  margin: `0px 0px 0px 12px`,
});

const Color3: any = styled('img')({
  height: `32px`,
  width: `32px`,
  margin: `0px 0px 0px 12px`,
});

const Frame156: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: data.currentVariant === 'ScreenMobile' ? 'unset' : `1`,
  margin:
    data.currentVariant === 'ScreenMobile'
      ? `26px 0px 0px 0px`
      : `0px 0px 0px 26px`,
  alignSelf: data.currentVariant === 'ScreenMobile' ? `stretch` : 'unset',
}));

const ButtonContained: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Warning']['Main'],
  boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  overflow: `hidden`,
}));

const Base: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `8px 22px`,
  boxSizing: `border-box`,
  margin: `0px`,
  overflow: `hidden`,
});

const MaskedIcon: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `18px`,
  height: `22px`,
  margin: `0px`,
});

const IconLeft: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  left: `-6px`,
  top: `-1px`,
});

const Vector: any = styled('img')({
  height: `16.56px`,
  width: `14px`,
  position: `absolute`,
  left: `2px`,
  top: `3px`,
});

const Button1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Warning']['Contrast'],
  fontStyle: theme.typography['Components']['Button Font - Large'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Large'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Large'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Large'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Large'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Large'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Large'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Large'].textTransform,
  margin: `0px 0px 0px 8px`,
}));

const Productstable: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `50px 0px 0px 0px`,
});

const Table1: any = styled(Table)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

function Contentcontainer(props: ContentcontainerProps): JSX.Element {
  const { data } = useContentcontainer();

  return (
    <ScreenDesktop className={props.className} data={data}>
      <Productinfo data={data}>
        <Imagecontainer className={'product-thumb-container'}>
          <ProductThumbCarousel1 {...props}/>
        </Imagecontainer>
        <Details data={data}>
          <Top>
            <Title>{props.title}</Title>
            <Title1>{`Lorem Ipsum Dolor Sit Amet`}</Title1>
          </Top>
          <Description>
            <ExperienceAnExquisit>{props.description}</ExperienceAnExquisit>
          </Description>
          <DividerHorizontal orientation="horizontal" />
          <Frame186 data={data}>
            <Colors data={data}>
              <ColorsAvailable>{`Colors Available`}</ColorsAvailable>
              <Colorswatches>
                <Color1
                  src={`assets/images/contentcontainer_color1.png`}
                  loading="lazy"
                  alt={'color1'}
                />
                <Color2
                  src={`assets/images/contentcontainer_color2.png`}
                  loading="lazy"
                  alt={'color2'}
                />
                <Color3
                  src={`assets/images/contentcontainer_color3.png`}
                  loading="lazy"
                  alt={'color3'}
                />
              </Colorswatches>
            </Colors>
            <Frame156 data={data}>
              <ButtonContained>
                <Base>
                  <MaskedIcon>
                    <IconLeft>
                      <Vector
                        src={`assets/images/contentcontainer_Vector.png`}
                        loading="lazy"
                        alt={'Vector'}
                      />
                    </IconLeft>
                  </MaskedIcon>
                  <Button1>{`Download Product Sheet`}</Button1>
                </Base>
              </ButtonContained>
            </Frame156>
          </Frame186>
        </Details>
      </Productinfo>
      <Productstable>
        <Table1 />
      </Productstable>
    </ScreenDesktop>
  );
}

export default Contentcontainer;
