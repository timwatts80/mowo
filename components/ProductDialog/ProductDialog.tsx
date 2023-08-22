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
import Table from 'components/Table/Table';
import { ProductDialogProps } from 'types';

const ProductDialog1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Background']['Background'],
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
}));

const Pagecontainer: any = styled('div')({
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
  height: `864px`,
  margin: `0px`,
});

const Close: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `20px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `68px`,
  margin: `0px`,
});

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
  cursor: `pointer`,
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

const Contentcontainer: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 48px 68px 48px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Productinfo: any = styled('div')({
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
  margin: `0px`,
});

const Thumbscontainer: any = styled('div')({
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
  height: `420px`,
  margin: `0px`,
});

const Imagecontainer: any = styled('div')({
  borderRadius: `10px`,
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
  overflow: `hidden`,
});

const ProductImage: any = styled('img')({
  height: `307px`,
  width: `476px`,
  objectFit: `cover`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const Thumbscarousel: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `89px`,
  margin: `24px 0px 0px 0px`,
});

const ProductImage1: any = styled('img')({
  height: `89px`,
  width: `110px`,
  objectFit: `cover`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const ProductImage2: any = styled('img')({
  height: `89px`,
  width: `110px`,
  objectFit: `cover`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px 0px 0px 12px`,
});

const ProductImage3: any = styled('img')({
  height: `89px`,
  width: `110px`,
  objectFit: `cover`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px 0px 0px 12px`,
});

const ProductImage4: any = styled('img')({
  height: `89px`,
  width: `110px`,
  objectFit: `cover`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px 0px 0px 12px`,
});

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
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px 0px 0px 32px`,
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
  alignSelf: `stretch`,
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
  margin: `32px 0px 0px 0px`,
});

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
  margin: `0px`,
}));

const DividerHorizontal: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `32px 0px 0px 0px`,
}));

const Colors: any = styled('div')({
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
  margin: `32px 0px 0px 0px`,
});

const ColorsAvailable: any = styled('div')(({ theme }: any) => ({
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
  height: `48px`,
  width: `48px`,
  margin: `0px`,
});

const Color2: any = styled('img')({
  height: `48px`,
  width: `48px`,
  margin: `0px 0px 0px 12px`,
});

const Color3: any = styled('img')({
  height: `48px`,
  width: `48px`,
  margin: `0px 0px 0px 12px`,
});

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
  margin: `32px 0px 0px 0px`,
});

const Table1: any = styled(Table)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

function ProductDialog(props: ProductDialogProps): JSX.Element {
  return (
    props.open && (
      <ProductDialog1 className={props.className}>
        <Pagecontainer>
          <Close>
            <Icon1 onClick={props.onClose}>
              <IconX>
                <Close1
                  src={`assets/images/ProductDialog_Close.png`}
                  loading="lazy"
                  alt={'Close'}
                />
              </IconX>
            </Icon1>
          </Close>
          <Contentcontainer>
            <Productinfo>
              <Thumbscontainer>
                <Imagecontainer>
                  <ProductImage
                    src={props.image.src}
                    loading="lazy"
                    alt={'product image'}
                  />
                </Imagecontainer>
                <Thumbscarousel>
                  <ProductImage1
                    src={props.image.src}
                    loading="lazy"
                    alt={props.image.alt}
                  />
                  <ProductImage2
                    src={props.image.src}
                    loading="lazy"
                    alt={props.image.alt}
                  />
                  <ProductImage3
                    src={props.image.src}
                    loading="lazy"
                    alt={props.image.alt}
                  />
                  <ProductImage4
                    src={props.image.src}
                    loading="lazy"
                    alt={props.image.alt}
                  />
                </Thumbscarousel>
              </Thumbscontainer>
              <Details>
                <Top>
                  <Title>{props.title}</Title>
                  <Title1>{`Lorem Ipsum Dolor Sit Amet`}</Title1>
                </Top>
                <Description>
                  <ExperienceAnExquisit>
                    {props.description}
                  </ExperienceAnExquisit>
                </Description>
                <DividerHorizontal orientation="horizontal" />
                <Colors>
                  <ColorsAvailable>{`Colors Available`}</ColorsAvailable>
                  <Colorswatches>
                    <Color1
                      src={`assets/images/ProductDialog_color1.png`}
                      loading="lazy"
                      alt={'color1'}
                    />
                    <Color2
                      src={`assets/images/ProductDialog_color2.png`}
                      loading="lazy"
                      alt={'color2'}
                    />
                    <Color3
                      src={`assets/images/ProductDialog_color3.png`}
                      loading="lazy"
                      alt={'color3'}
                    />
                  </Colorswatches>
                </Colors>
              </Details>
            </Productinfo>
            <Productstable>
              <Table1 />
            </Productstable>
          </Contentcontainer>
        </Pagecontainer>
      </ProductDialog1>
    )
  );
}

export default ProductDialog;
