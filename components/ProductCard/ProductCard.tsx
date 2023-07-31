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
  width: '33%',
  margin: '0 10px',
}));

const ProductImage: any = styled('img', {
  shouldForwardProp: (prop: any) => !['props'].includes(prop.toString()),
})(({ props }: any) => ({
  height: `209px`,
  width: `311px`,
  objectFit: `cover`,
  margin: props.isProduct2
    ? `32px 0px 0px 0px`
    : props.isProduct3
    ? `32px 0px 0px 0px`
    : props.isProduct4
    ? `32px 0px 0px 0px`
    : props.isProduct5
    ? `32px 0px 0px 0px`
    : props.isProduct6
    ? `32px 0px 0px 0px`
    : `0px`,
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
  width: `311px`,
  margin: `32px 0px 0px 0px`,
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
  width: `273px`,
  margin: `32px 0px 0px 0px`,
}));

const ButtonOutlined: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['props'].includes(prop.toString()),
})(({ theme, props }: any) => ({
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

const Rectangle180: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Secondary']['Main'],
  alignSelf: `stretch`,
  height: `16px`,
  margin: `32px 0px 0px 0px`,
}));

const ProductImage2: any = styled('img', {
  shouldForwardProp: (prop: any) => !['props'].includes(prop.toString()),
})(({ props }: any) => ({
  height: `208px`,
  width: `309px`,
  margin: props.isProduct2 ? `0px` : `32px 0px 0px 0px`,
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
  width: `311px`,
  margin: `32px 0px 0px 0px`,
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
  width: `273px`,
  margin: `32px 0px 0px 0px`,
}));

const ButtonOutlined1: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['props'].includes(prop.toString()),
})(({ theme, props }: any) => ({
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

const Rectangle1801: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Secondary']['Main'],
  alignSelf: `stretch`,
  height: `16px`,
  margin: `32px 0px 0px 0px`,
}));

const ProductImage3: any = styled('img', {
  shouldForwardProp: (prop: any) => !['props'].includes(prop.toString()),
})(({ props }: any) => ({
  height: `208px`,
  width: `309px`,
  objectFit: `cover`,
  margin: props.isProduct3 ? `0px` : `32px 0px 0px 0px`,
}));

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
  width: `311px`,
  margin: `32px 0px 0px 0px`,
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
  width: `273px`,
  margin: `32px 0px 0px 0px`,
}));

const ButtonOutlined2: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['props'].includes(prop.toString()),
})(({ theme, props }: any) => ({
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

const Rectangle1802: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Secondary']['Main'],
  alignSelf: `stretch`,
  height: `16px`,
  margin: `32px 0px 0px 0px`,
}));

const ProductImage1: any = styled('img', {
  shouldForwardProp: (prop: any) => !['props'].includes(prop.toString()),
})(({ props }: any) => ({
  height: `209px`,
  width: `311px`,
  objectFit: `cover`,
  margin: props.isProduct4 ? `0px` : `32px 0px 0px 0px`,
}));

const ProductTitle3: any = styled('div')(({ theme }: any) => ({
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
  width: `311px`,
  margin: `32px 0px 0px 0px`,
}));

const Description3: any = styled('div')(({ theme }: any) => ({
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
  width: `273px`,
  margin: `32px 0px 0px 0px`,
}));

const ButtonOutlined3: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['props'].includes(prop.toString()),
})(({ theme, props }: any) => ({
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

const Rectangle1803: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Secondary']['Main'],
  alignSelf: `stretch`,
  height: `16px`,
  margin: `32px 0px 0px 0px`,
}));

const ProductImage31: any = styled('img', {
  shouldForwardProp: (prop: any) => !['props'].includes(prop.toString()),
})(({ props }: any) => ({
  height: `208px`,
  width: `309px`,
  objectFit: `cover`,
  margin: props.isProduct5 ? `0px` : `32px 0px 0px 0px`,
}));

const ProductTitle4: any = styled('div')(({ theme }: any) => ({
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
  width: `311px`,
  margin: `32px 0px 0px 0px`,
}));

const Description4: any = styled('div')(({ theme }: any) => ({
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
  width: `273px`,
  margin: `32px 0px 0px 0px`,
}));

const ButtonOutlined4: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['props'].includes(prop.toString()),
})(({ theme, props }: any) => ({
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

const Rectangle1804: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Primary']['Main'],
  alignSelf: `stretch`,
  height: `16px`,
  margin: `32px 0px 0px 0px`,
}));

const ProductImage32: any = styled('img', {
  shouldForwardProp: (prop: any) => !['props'].includes(prop.toString()),
})(({ props }: any) => ({
  height: `208px`,
  width: `309px`,
  objectFit: `cover`,
  margin: props.isProduct6 ? `0px` : `32px 0px 0px 0px`,
}));

const ProductTitle5: any = styled('div')(({ theme }: any) => ({
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
  width: `311px`,
  margin: `32px 0px 0px 0px`,
}));

const Description5: any = styled('div')(({ theme }: any) => ({
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
  width: `273px`,
  margin: `32px 0px 0px 0px`,
}));

const ButtonOutlined5: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['props'].includes(prop.toString()),
})(({ theme, props }: any) => ({
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

const Rectangle1805: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Warning']['Main'],
  alignSelf: `stretch`,
  height: `16px`,
  margin: `32px 0px 0px 0px`,
}));

function ProductCard(props: ProductCardProps): JSX.Element {
  const { fns } = useProductCard();

  return (
    <StateProduct1 className={props.className}>
      {!props.isProduct2 &&
        !props.isProduct3 &&
        !props.isProduct4 &&
        !props.isProduct5 &&
        !props.isProduct6 && (
          <ProductImage
            props={props}
            src={`assets/images/ProductCard_Product_Image.png`}
            loading="lazy"
            alt={'Product Image'}
          />
        )}
      {!props.isProduct2 &&
        !props.isProduct3 &&
        !props.isProduct4 &&
        !props.isProduct5 &&
        !props.isProduct6 && <ProductTitle>{`Surface Go 3`}</ProductTitle>}
      {!props.isProduct2 &&
        !props.isProduct3 &&
        !props.isProduct4 &&
        !props.isProduct5 &&
        !props.isProduct6 && (
          <Description>
            {`Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move.`}
          </Description>
        )}
      {!props.isProduct2 &&
        !props.isProduct3 &&
        !props.isProduct4 &&
        !props.isProduct5 &&
        !props.isProduct6 && (
          <ButtonOutlined
            variant="outlined"
            size={'medium'}
            color={'info'}
            disabled={false}
            onClick={fns.handleButtonClick}
            props={props}
          >
            {'Device Details'}
          </ButtonOutlined>
        )}
      {!props.isProduct2 &&
        !props.isProduct3 &&
        !props.isProduct4 &&
        !props.isProduct5 &&
        !props.isProduct6 && <Rectangle180></Rectangle180>}
      {props.isProduct2 && (
        <ProductImage2
          props={props}
          src={`assets/images/ProductCard_Product_Image_2.png`}
          loading="lazy"
          alt={'Product Image 2'}
        />
      )}
      {props.isProduct2 && <ProductTitle1>{`Surface Laptop 2`}</ProductTitle1>}
      {props.isProduct2 && (
        <Description1>
          {`Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move.`}
        </Description1>
      )}
      {props.isProduct2 && (
        <ButtonOutlined1
          variant="outlined"
          size={'medium'}
          color={'info'}
          disabled={false}
          props={props}
        >
          {'Device Details'}
        </ButtonOutlined1>
      )}
      {props.isProduct2 && <Rectangle1801></Rectangle1801>}
      {props.isProduct3 && (
        <ProductImage3
          props={props}
          src={`assets/images/ProductCard_Product_Image_3.png`}
          loading="lazy"
          alt={'Product Image 3'}
        />
      )}
      {props.isProduct3 && <ProductTitle2>{`Surface Pro 9`}</ProductTitle2>}
      {props.isProduct3 && (
        <Description2>
          {`Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move.`}
        </Description2>
      )}
      {props.isProduct3 && (
        <ButtonOutlined2
          variant="outlined"
          size={'medium'}
          color={'info'}
          disabled={false}
          props={props}
        >
          {'Device Details'}
        </ButtonOutlined2>
      )}
      {props.isProduct3 && <Rectangle1802></Rectangle1802>}
      {props.isProduct4 && (
        <ProductImage1
          props={props}
          src={`assets/images/ProductCard_Product_Image_1.png`}
          loading="lazy"
          alt={'Product Image'}
        />
      )}
      {props.isProduct4 && <ProductTitle3>{`Surface Laptop 5`}</ProductTitle3>}
      {props.isProduct4 && (
        <Description3>
          {`Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move.`}
        </Description3>
      )}
      {props.isProduct4 && (
        <ButtonOutlined3
          variant="outlined"
          size={'medium'}
          color={'info'}
          disabled={false}
          props={props}
        >
          {'Device Details'}
        </ButtonOutlined3>
      )}
      {props.isProduct4 && <Rectangle1803></Rectangle1803>}
      {props.isProduct5 && (
        <ProductImage31
          props={props}
          src={`assets/images/ProductCard_Product_Image_3_1.png`}
          loading="lazy"
          alt={'Product Image 3'}
        />
      )}
      {props.isProduct5 && <ProductTitle4>{`Item 5`}</ProductTitle4>}
      {props.isProduct5 && (
        <Description4>
          {`Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move.`}
        </Description4>
      )}
      {props.isProduct5 && (
        <ButtonOutlined4
          variant="outlined"
          size={'medium'}
          color={'info'}
          disabled={false}
          props={props}
        >
          {'Device Details'}
        </ButtonOutlined4>
      )}
      {props.isProduct5 && <Rectangle1804></Rectangle1804>}
      {props.isProduct6 && (
        <ProductImage32
          props={props}
          src={`assets/images/ProductCard_Product_Image_3_2.png`}
          loading="lazy"
          alt={'Product Image 3'}
        />
      )}
      {props.isProduct6 && <ProductTitle5>{`Item 6`}</ProductTitle5>}
      {props.isProduct6 && (
        <Description5>
          {`Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move.`}
        </Description5>
      )}
      {props.isProduct6 && (
        <ButtonOutlined5
          variant="outlined"
          size={'medium'}
          color={'info'}
          disabled={false}
          props={props}
        >
          {'Device Details'}
        </ButtonOutlined5>
      )}
      {props.isProduct6 && <Rectangle1805></Rectangle1805>}
    </StateProduct1>
  );
}

export default ProductCard;
