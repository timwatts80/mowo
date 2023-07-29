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
import { ProductBoxProps } from 'types';

const Property1ProductBox1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(241, 241, 241, 0.95)`,
  borderRadius: `10px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px 0px 0px 0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
}));

const ProductImage: any = styled('img')({
  height: `209px`,
  width: `311px`,
  objectFit: `cover`,
  margin: `0px`,
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

const ButtonOutlined: any = styled(Button)(({ theme }: any) => ({
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

const Rectangle178: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Secondary']['Main'],
  alignSelf: `stretch`,
  height: `15px`,
  margin: `24px 0px 0px 0px`,
}));

const ProductImage2: any = styled('img')({
  height: `208px`,
  width: `309px`,
  margin: `24px 0px 0px 0px`,
});

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

const ButtonOutlined1: any = styled(Button)(({ theme }: any) => ({
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

const Rectangle1781: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Secondary']['Main'],
  alignSelf: `stretch`,
  height: `15px`,
  margin: `24px 0px 0px 0px`,
}));

function ProductBox(props: ProductBoxProps): JSX.Element {
  return (
    <Property1ProductBox1
      className={props.className}
      state={'Property 1=ProductBox2'}
    >
      <ProductImage
        src={`assets/images/ProductBox_Product_Image.png`}
        loading="lazy"
        alt={'Product Image'}
      />
      <ProductTitle>{`Surface Go 3`}</ProductTitle>
      <Description>
        {`Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move.`}
      </Description>
      <ButtonOutlined
        variant="outlined"
        size={'medium'}
        color={'info'}
        disabled={false}
      >
        {'Device Details'}
      </ButtonOutlined>
      <Rectangle178></Rectangle178>
      {false && (
        <ProductImage2
          src={`assets/images/ProductBox_Product_Image_2.png`}
          loading="lazy"
          alt={'Product Image 2'}
        />
      )}
      {false && <ProductTitle1>{`Surface Laptop Go 2`}</ProductTitle1>}
      {false && (
        <Description1>
          {`Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move.`}
        </Description1>
      )}
      {false && (
        <ButtonOutlined1
          variant="outlined"
          size={'medium'}
          color={'info'}
          disabled={false}
        >
          {'Device Details'}
        </ButtonOutlined1>
      )}
      {false && <Rectangle1781></Rectangle1781>}
    </Property1ProductBox1>
  );
}

export default ProductBox;
