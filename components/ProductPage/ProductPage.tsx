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
import { Rating, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Recommend1 from 'components/Recommend1/Recommend1';
import { ProductPageProps } from 'types';
import useProductPage from 'components/ProductPage/useProductPage';

const ScreenDesktop: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  backgroundColor: theme.palette['Background']['Background'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection:
    data.currentVariant === 'ScreenTablet'
      ? `column`
      : data.currentVariant === 'ScreenMobile'
      ? `column`
      : `row`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === 'ScreenTablet'
      ? `100px 70px`
      : data.currentVariant === 'ScreenMobile'
      ? `60px 10px`
      : `127px 48px`,
  boxSizing: `border-box`,
  height: 'auto',
}));

const Col1: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex:
    data.currentVariant === 'ScreenTablet'
      ? 'unset'
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `1`,
  margin: `0px`,
  alignSelf:
    data.currentVariant === 'ScreenTablet'
      ? `stretch`
      : data.currentVariant === 'ScreenMobile'
      ? `stretch`
      : 'unset',
}));

const MainImage: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  backgroundImage: `url(assets/images/ProductPage_main_image.png)`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height:
    data.currentVariant === 'ScreenTablet'
      ? `719px`
      : data.currentVariant === 'ScreenMobile'
      ? `434px`
      : `877px`,
  margin: `0px`,
}));

const Col2: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: data.currentVariant === 'ScreenMobile' ? `0px 10px` : `0px`,
  boxSizing: `border-box`,
  width:
    data.currentVariant === 'ScreenTablet'
      ? 'unset'
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `547px`,
  margin:
    data.currentVariant === 'ScreenTablet'
      ? `50px 0px 0px 0px`
      : data.currentVariant === 'ScreenMobile'
      ? `40px 0px 0px 0px`
      : `0px 0px 0px 75px`,
  alignSelf:
    data.currentVariant === 'ScreenTablet'
      ? `stretch`
      : data.currentVariant === 'ScreenMobile'
      ? `stretch`
      : 'unset',
}));

const Details: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  flex:
    data.currentVariant === 'ScreenTablet'
      ? `1`
      : data.currentVariant === 'ScreenMobile'
      ? `1`
      : 'unset',
}));

const Top: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
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

const Title: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].fontStyle
      : theme.typography['Typography']['H3'].fontStyle,
  fontFamily:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].fontFamily
      : theme.typography['Typography']['H3'].fontFamily,
  fontWeight:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].fontWeight
      : theme.typography['Typography']['H3'].fontWeight,
  fontSize:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].fontSize
      : theme.typography['Typography']['H3'].fontSize,
  letterSpacing:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].letterSpacing
      : theme.typography['Typography']['H3'].letterSpacing,
  lineHeight:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].lineHeight
      : theme.typography['Typography']['H3'].lineHeight,
  textDecoration:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].textDecoration
      : theme.typography['Typography']['H3'].textDecoration,
  textTransform:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['H4'].textTransform
      : theme.typography['Typography']['H3'].textTransform,
  margin: `0px`,
  alignSelf: data.currentVariant === 'ScreenMobile' ? `stretch` : 'unset',
}));

const Price: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: theme.typography['Typography']['H5'].fontStyle,
  fontFamily: theme.typography['Typography']['H5'].fontFamily,
  fontWeight: theme.typography['Typography']['H5'].fontWeight,
  fontSize: theme.typography['Typography']['H5'].fontSize,
  letterSpacing: theme.typography['Typography']['H5'].letterSpacing,
  lineHeight: theme.typography['Typography']['H5'].lineHeight,
  textDecoration: theme.typography['Typography']['H5'].textDecoration,
  textTransform: theme.typography['Typography']['H5'].textTransform,
  margin:
    data.currentVariant === 'ScreenMobile'
      ? `6px 0px 0px 0px`
      : `14px 0px 0px 0px`,
}));

const Row: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'ScreenMobile'
      ? `6px 0px 0px 0px`
      : `14px 0px 0px 0px`,
}));

const Q40: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Typography']['Body 2'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 2'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 2'].fontWeight,
  fontSize: theme.typography['Typography']['Body 2'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 2'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 2'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 2'].textDecoration,
  textTransform: theme.typography['Typography']['Body 2'].textTransform,
  margin: `0px`,
}));

const Rating1: any = styled(Rating)(({ theme }: any) => ({
  margin: `0px 0px 0px 6px`,
}));

const Description: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `44px 0px 0px 0px`,
  alignSelf:
    data.currentVariant === 'ScreenTablet'
      ? `stretch`
      : data.currentVariant === 'ScreenMobile'
      ? `stretch`
      : 'unset',
}));

const Description1: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Components']['Alert Title'].fontStyle,
  fontFamily: theme.typography['Components']['Alert Title'].fontFamily,
  fontWeight: theme.typography['Components']['Alert Title'].fontWeight,
  fontSize: theme.typography['Components']['Alert Title'].fontSize,
  letterSpacing: theme.typography['Components']['Alert Title'].letterSpacing,
  lineHeight: theme.typography['Components']['Alert Title'].lineHeight,
  textDecoration: theme.typography['Components']['Alert Title'].textDecoration,
  textTransform: theme.typography['Components']['Alert Title'].textTransform,
  margin: `0px`,
  alignSelf:
    data.currentVariant === 'ScreenTablet'
      ? `stretch`
      : data.currentVariant === 'ScreenMobile'
      ? `stretch`
      : 'unset',
}));

const ExperienceAnExquisit: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(80, 80, 80, 1)`,
  fontStyle: theme.typography['Typography']['Body 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 1'].fontWeight,
  fontSize: theme.typography['Typography']['Body 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 1'].textDecoration,
  textTransform: theme.typography['Typography']['Body 1'].textTransform,
  width:
    data.currentVariant === 'ScreenTablet'
      ? 'unset'
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `519px`,
  margin: `15px 0px 0px 0px`,
  alignSelf:
    data.currentVariant === 'ScreenTablet'
      ? `stretch`
      : data.currentVariant === 'ScreenMobile'
      ? `stretch`
      : 'unset',
}));

const AddShare: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `44px 0px 0px 0px`,
  alignSelf: data.currentVariant === 'ScreenMobile' ? `stretch` : 'unset',
}));

const ShopBtn1: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  backgroundColor: theme.palette['Text']['Primary'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: data.currentVariant === 'ScreenMobile' ? `10px 0px` : `16px 0px`,
  boxSizing: `border-box`,
  width: data.currentVariant === 'ScreenMobile' ? `200px` : `327px`,
  margin: `0px`,
  overflow: `hidden`,
  cursor: `pointer`,
}));

const CheckOut: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['Body 1'].fontStyle
      : theme.typography['Typography']['H6'].fontStyle,
  fontFamily:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['Body 1'].fontFamily
      : theme.typography['Typography']['H6'].fontFamily,
  fontWeight:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['Body 1'].fontWeight
      : theme.typography['Typography']['H6'].fontWeight,
  fontSize:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['Body 1'].fontSize
      : theme.typography['Typography']['H6'].fontSize,
  letterSpacing:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['Body 1'].letterSpacing
      : theme.typography['Typography']['H6'].letterSpacing,
  lineHeight:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['Body 1'].lineHeight
      : theme.typography['Typography']['H6'].lineHeight,
  textDecoration:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['Body 1'].textDecoration
      : theme.typography['Typography']['H6'].textDecoration,
  textTransform:
    data.currentVariant === 'ScreenMobile'
      ? theme.typography['Typography']['Body 1'].textTransform
      : theme.typography['Typography']['H6'].textTransform,
  margin: `0px`,
}));

const IconButton: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 30px`,
});

const Container: any = styled('div')({
  borderRadius: `48px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `4px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const IconShare: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  margin: `0px`,
});

const Share: any = styled('img')({
  height: `16px`,
  width: `16px`,
  position: `absolute`,
  left: `4px`,
  top: `4px`,
});

const DividerHorizontal: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `44px 0px 0px 0px`,
}));

const Ingredients: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `44px 0px 0px 0px`,
});

const Ingredients1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Components']['Alert Title'].fontStyle,
  fontFamily: theme.typography['Components']['Alert Title'].fontFamily,
  fontWeight: theme.typography['Components']['Alert Title'].fontWeight,
  fontSize: theme.typography['Components']['Alert Title'].fontSize,
  letterSpacing: theme.typography['Components']['Alert Title'].letterSpacing,
  lineHeight: theme.typography['Components']['Alert Title'].lineHeight,
  textDecoration: theme.typography['Components']['Alert Title'].textDecoration,
  textTransform: theme.typography['Components']['Alert Title'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const AppleCarrotBeetCeler: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(80, 80, 80, 1)`,
  fontStyle: theme.typography['Typography']['Body 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 1'].fontWeight,
  fontSize: theme.typography['Typography']['Body 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 1'].textDecoration,
  textTransform: theme.typography['Typography']['Body 1'].textTransform,
  alignSelf: `stretch`,
  margin: `15px 0px 0px 0px`,
}));

const Recommend11: any = styled(Recommend1)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `44px 0px 0px 0px`,
}));

function ProductPage(props: ProductPageProps): JSX.Element {
  const { data, fns } = useProductPage();

  return (
    props.open && (
      <ScreenDesktop className={props.className} data={data}>
        <Col1 data={data}>
          <MainImage data={data}></MainImage>
        </Col1>
        <Col2 data={data}>
          <Details data={data}>
            <Top data={data}>
              <Title data={data}>{`Fancy Fusion`}</Title>
              <Price data={data}>{`$8.95`}</Price>
              <Row data={data}>
                <Q40>{`4.0`}</Q40>
                <Rating1 size={'small'} disabled={false} />
              </Row>
            </Top>
            <Description data={data}>
              <Description1 data={data}>{`Description`}</Description1>
              <ExperienceAnExquisit data={data}>
                {`Experience an exquisite blend of flavors in Fancy Fusion, where elegance meets innovation. Savor the refined taste of this captivating juice, crafted with finesse for a truly sophisticated palate.`}
              </ExperienceAnExquisit>
            </Description>
            <AddShare data={data}>
              <ShopBtn1 onClick={fns.toggleDialog} data={data}>
                <CheckOut data={data}>{`ADD TO BAG`}</CheckOut>
              </ShopBtn1>
              <IconButton>
                <Container>
                  <IconShare>
                    <Share
                      src={`assets/images/ProductPage_share.png`}
                      loading="lazy"
                      alt={'share'}
                    />
                  </IconShare>
                </Container>
              </IconButton>
            </AddShare>
            <DividerHorizontal orientation="horizontal" />
            <Ingredients>
              <Ingredients1>{`Ingredients`}</Ingredients1>
              <AppleCarrotBeetCeler>
                {`Apple, Carrot, Beet, Celery, Lemon (All Organic + Cold-Pressed), Organic Fermented Lemongrass`}
              </AppleCarrotBeetCeler>
            </Ingredients>
            <Recommend11 />
          </Details>
        </Col2>
      </ScreenDesktop>
    )
  );
}

export default ProductPage;