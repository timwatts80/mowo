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
import { ProductPageTestProps } from 'types';
import useProductPageTest from 'components/ProductPageTest/useProductPageTest';

const ScreenDesktop: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  backgroundColor: theme.palette['Background']['Background'],
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
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === 'ScreenTablet'
      ? `100px 70px`
      : data.currentVariant === 'ScreenMobile'
      ? `60px 10px`
      : `64px 48px`,
  boxSizing: `border-box`,
  height: 'auto',
}));

const Col1: any = styled('div', {
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
  flex:
    data.currentVariant === 'ScreenTablet'
      ? 'unset'
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `1`,
  height:
    data.currentVariant === 'ScreenTablet'
      ? `492px`
      : data.currentVariant === 'ScreenMobile'
      ? `268px`
      : `307px`,
  margin: `0px`,
  alignSelf:
    data.currentVariant === 'ScreenTablet'
      ? `stretch`
      : data.currentVariant === 'ScreenMobile'
      ? `stretch`
      : 'unset',
}));

const Imagecontainer: any = styled('div')({
  borderRadius: `0px`,
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

const ProductImage: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height:
    data.currentVariant === 'ScreenTablet'
      ? `492px`
      : data.currentVariant === 'ScreenMobile'
      ? `268px`
      : `307px`,
  width:
    data.currentVariant === 'ScreenTablet'
      ? `628px`
      : data.currentVariant === 'ScreenMobile'
      ? `355px`
      : `454.5px`,
  objectFit: `cover`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
}));

const Col2: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
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

const Details: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

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
  margin: `0px`,
});

const Title: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: theme.typography['Typography']['H3'].fontStyle,
  fontFamily: theme.typography['Typography']['H3'].fontFamily,
  fontWeight: theme.typography['Typography']['H3'].fontWeight,
  fontSize: theme.typography['Typography']['H3'].fontSize,
  letterSpacing: theme.typography['Typography']['H3'].letterSpacing,
  lineHeight: theme.typography['Typography']['H3'].lineHeight,
  textDecoration: theme.typography['Typography']['H3'].textDecoration,
  textTransform: theme.typography['Typography']['H3'].textTransform,
  margin: `0px`,
}));

const Row: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `14px 0px 0px 0px`,
});

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
  margin: `44px 0px 0px 0px`,
});

const Description1: any = styled('div')(({ theme }: any) => ({
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

const ExperienceAnExquisit: any = styled('div')(({ theme }: any) => ({
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

const AddShare: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
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
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `16px 0px`,
  boxSizing: `border-box`,
  width: data.currentVariant === 'ScreenMobile' ? `265px` : `327px`,
  margin: `0px`,
  overflow: `hidden`,
}));

const CheckOut: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: theme.typography['Typography']['H6'].fontStyle,
  fontFamily: theme.typography['Typography']['H6'].fontFamily,
  fontWeight: theme.typography['Typography']['H6'].fontWeight,
  fontSize: theme.typography['Typography']['H6'].fontSize,
  letterSpacing: theme.typography['Typography']['H6'].letterSpacing,
  lineHeight: theme.typography['Typography']['H6'].lineHeight,
  textDecoration: theme.typography['Typography']['H6'].textDecoration,
  textTransform: theme.typography['Typography']['H6'].textTransform,
  margin: `0px`,
}));

const IconButton: any = styled('div')({
  borderRadius: `0px`,
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
  borderRadius: `0px`,
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
  margin: `44px 0px 0px 0px`,
});

const Specifications: any = styled('div')(({ theme }: any) => ({
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

const LoremIpsumDolorSitAm: any = styled('div')(({ theme }: any) => ({
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

const Close: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  left:
    data.currentVariant === 'ScreenTablet'
      ? `720px`
      : data.currentVariant === 'ScreenMobile'
      ? `337px`
      : `1018px`,
  top:
    data.currentVariant === 'ScreenTablet'
      ? `20px`
      : data.currentVariant === 'ScreenMobile'
      ? `10px`
      : `34px`,
  cursor: `pointer`,
}));

const Icon1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `28px`,
  height: `28px`,
  margin: `0px`,
});

const IconX: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  left: `0px`,
  top: `0px`,
});

const Close1: any = styled('img')({
  height: `14.41px`,
  width: `14.41px`,
  position: `absolute`,
  left: `7px`,
  top: `7px`,
});

function ProductPageTest(props: ProductPageTestProps): JSX.Element {
  const { data } = useProductPageTest();

  return (
    props.open && (
      <ScreenDesktop className={props.className} data={data}>
        <Col1 data={data}>
          <Imagecontainer>
            <ProductImage
              data={data}
              src={`assets/images/ProductPageTest_product_image.png`}
              loading="lazy"
              alt={'product image'}
            />
          </Imagecontainer>
        </Col1>
        <Col2 data={data}>
          <Details>
            <Top>
              <Title>{`Fancy Fusion`}</Title>
              <Row>
                <Q40>{`4.0`}</Q40>
                <Rating1 size={'small'} disabled={false} />
              </Row>
            </Top>
            <Description>
              <Description1>{`Description`}</Description1>
              <ExperienceAnExquisit>
                {`Experience an exquisite blend of flavors in Fancy Fusion, where elegance meets innovation. Savor the refined taste of this captivating juice, crafted with finesse for a truly sophisticated palate.`}
              </ExperienceAnExquisit>
            </Description>
            <AddShare data={data}>
              <ShopBtn1 data={data}>
                <CheckOut>{`ADD TO BAG`}</CheckOut>
              </ShopBtn1>
              <IconButton>
                <Container>
                  <IconShare>
                    <Share
                      src={`assets/images/ProductPageTest_share.png`}
                      loading="lazy"
                      alt={'share'}
                    />
                  </IconShare>
                </Container>
              </IconButton>
            </AddShare>
            <DividerHorizontal orientation="horizontal" />
            <Ingredients>
              <Specifications>{`Specifications`}</Specifications>
              <LoremIpsumDolorSitAm>
                {`Lorem, Ipsum, Dolor, Sit, Amet`}
              </LoremIpsumDolorSitAm>
            </Ingredients>
          </Details>
        </Col2>
        <Close onClick={props.onClose} data={data}>
          <Icon1>
            <IconX>
              <Close1
                src={`assets/images/ProductPageTest_Close.png`}
                loading="lazy"
                alt={'Close'}
              />
            </IconX>
          </Icon1>
        </Close>
      </ScreenDesktop>
    )
  );
}

export default ProductPageTest;
