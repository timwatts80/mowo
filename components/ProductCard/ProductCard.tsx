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
import { Button, Dialog } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProductDialog from 'components/ProductDialog/ProductDialog';
import { ProductCardProps } from 'types';
import useProductCard from 'components/ProductCard/useProductCard';

const ProductCard1: any = styled('div')({
  borderRadius: `0px`,
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
  borderRadius: `0px`,
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

const ProductCardNew: any = styled('div')({
  borderRadius: `10px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `311px`,
  height: `448px`,
  margin: `0px`,
});

const Imagecontainer: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Other']['Divider'],
  borderRadius: `10px 10px 0px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `24px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `120px`,
  zIndex: `2`,
  margin: `0px`,
}));

const ProductImage: any = styled('img')({
  height: `180px`,
  width: `263px`,
  objectFit: `cover`,
  zIndex: `0`,
  position: `absolute`,
  left: `24px`,
  top: `-84px`,
});

const Productcardbackgroun: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `108px`,
  width: `311px`,
  zIndex: `1`,
  left: `0px`,
  top: `120px`,
});

const Rectangle182: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Other']['Divider'],
  borderRadius: `10px 10px 0px 0px`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
}));

const Productinfocontainer: any = styled('div')({
  backgroundColor: `rgba(192, 221, 128, 1)`,
  boxShadow: `inset 0px 0px 30px rgba(153, 215, 18, 1), 0px 4px 30px rgba(238, 255, 200, 0.6)`,
  borderRadius: `0px 0px 10px 10px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `24px`,
  boxSizing: `border-box`,
  width: `311px`,
  zIndex: `0`,
  margin: `0px`,
});

const Titlecontainer: any = styled('div')({
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
  zIndex: `2`,
  margin: `0px`,
});

const ProductTitle: any = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Open Sans`,
  fontWeight: `700`,
  fontSize: `28px`,
  letterSpacing: `-0.8399999737739563px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const Detailscontainer: any = styled('div')({
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
  zIndex: `1`,
  margin: `16px 0px 0px 0px`,
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

const Button1: any = styled('div')({
  borderRadius: `10px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  zIndex: `0`,
  margin: `16px 0px 0px 0px`,
});

const ButtonContained: any = styled(Button)(({ theme }: any) => ({
  margin: `0px`,
  color: theme.palette['Success']['Light'],
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
}));

const Productdialogcontain: any = styled('div')({
  borderRadius: `0px`,
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

const ProductDialog1: any = styled(ProductDialog)(({ theme }: any) => ({
  width: `1080px`,
  margin: `0px`,
}));

function ProductCard(props: ProductCardProps): JSX.Element {
  const { data, fns } = useProductCard();

  return (
    <ProductCard1 className={props.className}>
      <Productcardcontainer>
        <ProductCardNew>
          <Imagecontainer>
            <ProductImage
              src={props.image.src}
              loading="lazy"
              alt={props.image.alt}
            />
          </Imagecontainer>
          {false && (
            <Productcardbackgroun>
              <Rectangle182></Rectangle182>
            </Productcardbackgroun>
          )}
          <Productinfocontainer>
            <Titlecontainer>
              <ProductTitle>{props.title}</ProductTitle>
            </Titlecontainer>
            <Detailscontainer>
              <Description>{props.description}</Description>
            </Detailscontainer>
            <Button1>
              <ButtonContained
                variant="contained"
                size={'large'}
                color={'info'}
                disabled={false}
                onClick={fns.toggleDialog}
              >
                {'Device Details'}
              </ButtonContained>
            </Button1>
          </Productinfocontainer>
        </ProductCardNew>
      </Productcardcontainer>
      <Dialog
        maxWidth={false}
        open={data.isDialogOpen}
        onClose={fns.toggleDialog}
      >
        <Productdialogcontain>
          <ProductDialog1 open={data.isDialogOpen} onClose={fns.toggleDialog} {...props} />
        </Productdialogcontain>
      </Dialog>
    </ProductCard1>
  );
}

export default ProductCard;
