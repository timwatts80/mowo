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
import { ProductCardProps } from 'types';
import useProductCard from 'components/ProductCard/useProductCard';

const StateProduct1: any = styled('div')(({ theme }: any) => ({
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
  overflow: `hidden`,
  height: 'auto',
  width: 'fit-content',
}));

const ProductImage: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height: `209px`,
  width: `311px`,
  objectFit: `cover`,
  margin: data.isProduct2 ? `24px 0px 0px 0px` : `0px`,
}));

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
  height: `68px`,
  width: `311px`,
  margin: `24px 0px 0px 0px`,
}));

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
  height: `69px`,
  width: `273px`,
  margin: `24px 0px 0px 0px`,
}));

const ButtonOutlined: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  margin: `24px 0px 0px 0px`,
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

const Rectangle180: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Secondary']['Main'],
  alignSelf: `stretch`,
  height: `16px`,
  margin: `24px 0px 0px 0px`,
}));

const ProductImage2: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height: `208px`,
  width: `309px`,
  margin: data.isProduct2 ? `0px` : `24px 0px 0px 0px`,
}));

const ProductTitle1: any = styled('div')(({ theme }: any) => ({
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
  height: `68px`,
  width: `311px`,
  margin: `24px 0px 0px 0px`,
}));

const Description1: any = styled('div')(({ theme }: any) => ({
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
  height: `69px`,
  width: `273px`,
  margin: `24px 0px 0px 0px`,
}));

const ButtonOutlined1: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  margin: `24px 0px 0px 0px`,
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

const Rectangle1801: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Secondary']['Main'],
  alignSelf: `stretch`,
  height: `16px`,
  margin: `24px 0px 0px 0px`,
}));

const ProductImage3: any = styled('img')({
  height: `208px`,
  width: `309px`,
  objectFit: `cover`,
  margin: `24px 0px 0px 0px`,
});

const ProductTitle2: any = styled('div')(({ theme }: any) => ({
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
  height: `68px`,
  width: `311px`,
  margin: `24px 0px 0px 0px`,
}));

const Description2: any = styled('div')(({ theme }: any) => ({
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
  height: `69px`,
  width: `273px`,
  margin: `24px 0px 0px 0px`,
}));

const ButtonOutlined2: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  margin: `24px 0px 0px 0px`,
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

const Rectangle1802: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Secondary']['Main'],
  alignSelf: `stretch`,
  height: `16px`,
  margin: `24px 0px 0px 0px`,
}));

function ProductCard(props: ProductCardProps): JSX.Element {
  const { data } = useProductCard();

  return (
    <StateProduct1 className={props.className}>
      {!data.isProduct2 && (
        <ProductImage
          data={data}
          src={`assets/images/ProductCard_Product_Image.png`}
          loading="lazy"
          alt={'Product Image'}
        />
      )}
      {!data.isProduct2 && <ProductTitle>{`Surface Go 3`}</ProductTitle>}
      {!data.isProduct2 && (
        <Description>
          {`Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move.`}
        </Description>
      )}
      {!data.isProduct2 && (
        <ButtonOutlined
          variant="outlined"
          size={'medium'}
          color={'info'}
          disabled={false}
          data={data}
        >
          {'Device Details'}
        </ButtonOutlined>
      )}
      {!data.isProduct2 && <Rectangle180></Rectangle180>}
      {data.isProduct2 && (
        <ProductImage2
          data={data}
          src={`assets/images/ProductCard_Product_Image_2.png`}
          loading="lazy"
          alt={'Product Image 2'}
        />
      )}
      {data.isProduct2 && <ProductTitle1>{`Surface Laptop 2`}</ProductTitle1>}
      {data.isProduct2 && (
        <Description1>
          {`Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move.`}
        </Description1>
      )}
      {data.isProduct2 && (
        <ButtonOutlined1
          variant="outlined"
          size={'medium'}
          color={'info'}
          disabled={false}
          data={data}
        >
          {'Device Details'}
        </ButtonOutlined1>
      )}
      {data.isProduct2 && <Rectangle1801></Rectangle1801>}
      {false && (
        <ProductImage3
          src={`assets/images/ProductCard_Product_Image_3.png`}
          loading="lazy"
          alt={'Product Image 3'}
        />
      )}
      {false && <ProductTitle2>{`Surface Pro 9`}</ProductTitle2>}
      {false && (
        <Description2>
          {`Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move.`}
        </Description2>
      )}
      {false && (
        <ButtonOutlined2
          variant="outlined"
          size={'medium'}
          color={'info'}
          disabled={false}
          data={data}
        >
          {'Device Details'}
        </ButtonOutlined2>
      )}
      {false && <Rectangle1802></Rectangle1802>}
    </StateProduct1>
  );
}

export default ProductCard;
