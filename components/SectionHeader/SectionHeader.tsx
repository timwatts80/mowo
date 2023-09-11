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
import { SectionHeaderProps } from 'types';
import useSectionHeader from 'components/SectionHeader/useSectionHeader';

const ScreenDesktop: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `24px 0px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const Title1Title2Span1: any = styled('span', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
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

const Title1Title2Span2: any = styled('span', {
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

const Title1Title2: any = styled('div', {
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

const LoremIpsumDolorSitAm: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: theme.typography['Typography']['H5'].fontStyle,
  fontFamily: theme.typography['Typography']['H5'].fontFamily,
  fontWeight: theme.typography['Typography']['H5'].fontWeight,
  fontSize: theme.typography['Typography']['H5'].fontSize,
  letterSpacing: theme.typography['Typography']['H5'].letterSpacing,
  lineHeight: theme.typography['Typography']['H5'].lineHeight,
  textDecoration: theme.typography['Typography']['H5'].textDecoration,
  textTransform: theme.typography['Typography']['H5'].textTransform,
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'ScreenMobile'
      ? `12px 0px 0px 0px`
      : `16px 0px 0px 0px`,
}));

function SectionHeader(props: SectionHeaderProps): JSX.Element {
  const { data } = useSectionHeader();

  return (
    <ScreenDesktop className={props.className}>
      <Title1Title2 data={data}>
        <Title1Title2Span1 data={data}>{`Title1 `}</Title1Title2Span1>
        <Title1Title2Span2 data={data}>{`Title2`}</Title1Title2Span2>
      </Title1Title2>
      <LoremIpsumDolorSitAm data={data}>
        {`Lorem ipsum dolor sit amet`}
      </LoremIpsumDolorSitAm>
    </ScreenDesktop>
  );
}

export default SectionHeader;
