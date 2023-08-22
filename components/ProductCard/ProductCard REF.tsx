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
import { Button, Rating, Divider, Dialog } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProductCardProps } from 'types';
import useProductCard from 'components/ProductCard/useProductCard';

const ProductCard1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const Productcardcontainer: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  width: `331px`,
  height: `516px`,
  margin: `0px`,
});

const ProductCardTemp: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(241, 241, 241, 0.95)`,
  borderRadius: `10px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px 0px 0px 0px`,
  boxSizing: `border-box`,
  width: `311px`,
  height: `496px`,
  margin: `0px`,
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
  height: `208px`,
  margin: `0px`,
});

const ProductImage: any = styled('img')({
  height: `208px`,
  width: `258px`,
  objectFit: `cover`,
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

const Bottomaccent: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `32px 0px 0px 0px`,
});

const Bottomaccentcolor: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Secondary']['Main'],
  alignSelf: `stretch`,
  height: `16px`,
  margin: `0px`,
}));

const Productdialogcontain: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 18px`,
});

const ProductPageTest: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Background']['Background'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `64px 48px`,
  boxSizing: `border-box`,
  width: `1080px`,
  margin: `0px`,
}));

const Col1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  height: `307px`,
  margin: `0px`,
});

const Imagecontainer1: any = styled('div')({
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

const ProductImage1: any = styled('img')({
  height: `307px`,
  width: `454.5px`,
  objectFit: `cover`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const Col2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px 0px 0px 75px`,
});

const Details: any = styled('div')({
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

const Description1: any = styled('div')({
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

const Description2: any = styled('div')(({ theme }: any) => ({
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

const AddShare: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `44px 0px 0px 0px`,
});

const ShopBtn1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Text']['Primary'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `16px 0px`,
  boxSizing: `border-box`,
  width: `327px`,
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

const Side: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `1018px`,
  top: `34px`,
  cursor: `pointer`,
});

const Icon1: any = styled('div')({
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
  cursor: `pointer`,
});

const IconX: any = styled('div')({
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

const Close: any = styled('img')({
  height: `14.41px`,
  width: `14.41px`,
  position: `absolute`,
  left: `7px`,
  top: `7px`,
});

function ProductCard(props: ProductCardProps): JSX.Element {
  const { data, fns } = useProductCard();

  return (
    <ProductCard1 className={props.className}>
      <Productcardcontainer>
        <ProductCardTemp>
          <Imagecontainer>
            <ProductImage
              src={props.products.image.src}
              loading="lazy"
              alt={'product image'}
            />
          </Imagecontainer>
          <Titlecontainer>
            <ProductTitle>{props.products.title}</ProductTitle>
          </Titlecontainer>
          <Descriptioncontainer>
            <Description>{props.products.description}</Description>
          </Descriptioncontainer>
          <ButtonOutlined
            variant="outlined"
            size={'medium'}
            color={'info'}
            disabled={false}
            onClick={fns.toggleDialog}
          >
            {'Device Details'}
          </ButtonOutlined>
          <Bottomaccent>
            <Bottomaccentcolor></Bottomaccentcolor>
          </Bottomaccent>
        </ProductCardTemp>
      </Productcardcontainer>
      <Dialog
        maxWidth={false}
        open={data.isDialogOpen}
        onClose={fns.toggleDialog}
      >
        <Productdialogcontain>
          <ProductPageTest open={data.isDialogOpen} onClose={fns.toggleDialog}>
            <Col1>
              <Imagecontainer1>
                <ProductImage1
                  src={props.products.image.src}
                  loading="lazy"
                  alt={'product image'}
                />
              </Imagecontainer1>
            </Col1>
            <Col2>
              <Details>
                <Top>
                  <Title>{props.products.title}</Title>
                  <Row>
                    <Q40>{`4.0`}</Q40>
                    <Rating1 size={'small'} disabled={false} />
                  </Row>
                </Top>
                <Description1>
                  <Description2>{`Description`}</Description2>
                  <ExperienceAnExquisit>
                    {props.products.description}
                  </ExperienceAnExquisit>
                </Description1>
                <AddShare>
                  <ShopBtn1>
                    <CheckOut>{`ADD TO BAG`}</CheckOut>
                  </ShopBtn1>
                  <IconButton>
                    <Container>
                      <IconShare>
                        <Share
                          src={`assets/images/ProductCard_share.png`}
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
            <Side onClick={props.onClose}>
              <Icon1 onClick={fns.toggleDialog}>
                <IconX>
                  <Close
                    src={`assets/images/ProductCard_Close.png`}
                    loading="lazy"
                    alt={'Close'}
                  />
                </IconX>
              </Icon1>
            </Side>
          </ProductPageTest>
        </Productdialogcontain>
      </Dialog>
    </ProductCard1>
  );
}

export default ProductCard;
