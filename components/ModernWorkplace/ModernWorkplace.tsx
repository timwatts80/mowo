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
import { ModernWorkplaceProps } from 'types';
import useModernWorkplace from 'components/ModernWorkplace/useModernWorkplace';

const ScreenDesktop: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
});

const Rows: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  backgroundColor:
    data.currentVariant === 'ScreenTablet'
      ? `rgba(255, 255, 255, 1)`
      : data.currentVariant === 'ScreenMobile'
      ? `rgba(255, 255, 255, 1)`
      : `rgba(248, 248, 248, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding:
    data.currentVariant === 'ScreenTablet'
      ? `60px 60px 45px 60px`
      : data.currentVariant === 'ScreenMobile'
      ? `60px 45px 45px 45px`
      : `90px 90px 75px 90px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  overflow: `hidden`,
}));

const UnleashThePowerOfModSpan1: any = styled('span', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `56px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
}));

const UnleashThePowerOfModSpan2: any = styled('span', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 185, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `56px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
}));

const UnleashThePowerOfMod: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `56px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'ScreenTablet'
      ? `18px 0px 0px 0px`
      : data.currentVariant === 'ScreenMobile'
      ? `12px 0px 0px 0px`
      : `0px`,
}));

const MowoConvergesThePowe: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `27px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'ScreenMobile'
      ? `12px 0px 0px 0px`
      : `18px 0px 0px 0px`,
}));

const Cols: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `30px 0px 0px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'ScreenMobile'
      ? `12px 0px 0px 0px`
      : `18px 0px 0px 0px`,
  overflow: `hidden`,
}));

const LeftCol: any = styled('div')({
  backgroundImage: `url(assets/images/ModernWorkplace_left_col.png)`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  borderRadius: `20px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
  overflow: `hidden`,
});

const RightCol: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `30px 0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 90px`,
  overflow: `hidden`,
});

const TopRow: any = styled('div')({
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

const CuttingEdgeSynergySpan1: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const CuttingEdgeSynergySpan2: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 164, 239, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const CuttingEdgeSynergy: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  margin: `0px`,
});

const ExpertlyUnitingMicro: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  width: `458px`,
  margin: `6px 0px 0px 0px`,
}));

const MiddleRow: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `30px 0px 0px 0px`,
});

const PersonalizedProgressSpan1: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const PersonalizedProgressSpan2: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(127, 186, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const PersonalizedProgress: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  margin: `0px`,
});

const CateringToYourUnique: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  width: `458px`,
  margin: `6px 0px 0px 0px`,
}));

const BottomRow: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `30px 0px 0px 0px`,
});

const CommittedPartnershipSpan1: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const CommittedPartnershipSpan2: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(242, 80, 34, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const CommittedPartnership: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  margin: `0px`,
});

const MoreThanAVendorWeReY: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  width: `458px`,
  margin: `6px 0px 0px 0px`,
}));

const UnleashThePowerOfMod1Span1: any = styled('span', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `48px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
}));

const UnleashThePowerOfMod1Span2: any = styled('span', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 185, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `48px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
}));

const UnleashThePowerOfMod1: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `48px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'ScreenTablet'
      ? `0px`
      : data.currentVariant === 'ScreenMobile'
      ? `12px 0px 0px 0px`
      : `18px 0px 0px 0px`,
}));

const MowoConvergesThePowe1: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `23px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'ScreenMobile'
      ? `12px 0px 0px 0px`
      : `18px 0px 0px 0px`,
}));

const Cols1: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `30px 0px 0px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'ScreenMobile'
      ? `12px 0px 0px 0px`
      : `18px 0px 0px 0px`,
  overflow: `hidden`,
}));

const LeftCol1: any = styled('div')({
  backgroundImage: `url(assets/images/ModernWorkplace_left_col_1.png)`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  borderRadius: `20px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
  overflow: `hidden`,
  backgroundPosition: 'left center',
});

const RightCol1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `15px 0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px 0px 0px 30px`,
  overflow: `hidden`,
});

const TopRow1: any = styled('div')({
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

const CuttingEdgeSynergy1Span1: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const CuttingEdgeSynergy1Span2: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 164, 239, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const CuttingEdgeSynergy1: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  margin: `0px`,
});

const ExpertlyUnitingMicro1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `3px 0px 0px 0px`,
}));

const MiddleRow1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `18px 0px 0px 0px`,
});

const PersonalizedProgress1Span1: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const PersonalizedProgress1Span2: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(127, 186, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const PersonalizedProgress1: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  margin: `0px`,
});

const CateringToYourUnique1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `3px 0px 0px 0px`,
}));

const BottomRow1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `18px 0px 0px 0px`,
});

const CommittedPartnership1Span1: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const CommittedPartnership1Span2: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(242, 80, 34, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const CommittedPartnership1: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  margin: `0px`,
});

const MoreThanAVendorWeReY1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `3px 0px 0px 0px`,
}));

const UnleashThePowerOfMod2Span1: any = styled('span', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `39px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
}));

const UnleashThePowerOfMod2Span2: any = styled('span', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 185, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `39px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
}));

const UnleashThePowerOfMod2: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `39px`,
  letterSpacing: `-0.5px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: data.currentVariant === 'ScreenMobile' ? `0px` : `18px 0px 0px 0px`,
}));

const MowoConvergesThePowe2: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'ScreenMobile'
      ? `12px 0px 0px 0px`
      : `18px 0px 0px 0px`,
}));

const Rows1: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `15px 0px 0px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'ScreenMobile'
      ? `12px 0px 0px 0px`
      : `18px 0px 0px 0px`,
  overflow: `hidden`,
}));

const TopRow2: any = styled('div')({
  backgroundImage: `url(assets/images/ModernWorkplace_top_row.png)`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  borderRadius: `20px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `272px`,
  margin: `0px`,
  overflow: `hidden`,
});

const BottomRow2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `30px 0px 15px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  overflow: `hidden`,
});

const TopRow3: any = styled('div')({
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

const CuttingEdgeSynergy2Span1: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
});

const CuttingEdgeSynergy2Span2: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 164, 239, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
});

const CuttingEdgeSynergy2: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const ExpertlyUnitingMicro2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `3px 0px 0px 0px`,
}));

const MiddleRow2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `18px 0px 0px 0px`,
});

const PersonalizedProgress2Span1: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
});

const PersonalizedProgress2Span2: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(127, 186, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
});

const PersonalizedProgress2: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const CateringToYourUnique2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `3px 0px 0px 0px`,
}));

const BottomRow3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `18px 0px 0px 0px`,
});

const CommittedPartnership2Span1: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
});

const CommittedPartnership2Span2: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(242, 80, 34, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  alignSelf: 'unset',
  margin: 'unset',
});

const CommittedPartnership2: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const MoreThanAVendorWeReY2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `3px 0px 0px 0px`,
}));

const ColorStroke: any = styled('div')({
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

const Rectangle173: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Secondary']['Main'],
  flex: `1`,
  height: `15px`,
  margin: `0px`,
}));

const Rectangle174: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Success']['Main'],
  flex: `1`,
  height: `15px`,
  margin: `0px`,
}));

const Rectangle175: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Primary']['Main'],
  flex: `1`,
  height: `15px`,
  margin: `0px`,
}));

const Rectangle176: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Warning']['Main'],
  flex: `1`,
  height: `15px`,
  margin: `0px`,
}));

function ModernWorkplace(props: ModernWorkplaceProps): JSX.Element {
  const { data } = useModernWorkplace();

  return (
    <ScreenDesktop className={props.className}>
      <Rows data={data}>
        {!(data.currentVariant === 'ScreenTablet') &&
          !(data.currentVariant === 'ScreenMobile') && (
            <UnleashThePowerOfMod data={data}>
              <UnleashThePowerOfModSpan1
                data={data}
              >{`Unleash the Power of `}</UnleashThePowerOfModSpan1>
              <UnleashThePowerOfModSpan2
                data={data}
              >{`Modern Work`}</UnleashThePowerOfModSpan2>
            </UnleashThePowerOfMod>
          )}
        {!(data.currentVariant === 'ScreenTablet') &&
          !(data.currentVariant === 'ScreenMobile') && (
            <MowoConvergesThePowe data={data}>
              {`MOWO converges the power of Microsoft Surface with your unique business landscape. We not only equip your workforce with cutting-edge technology but tailor solutions to your distinct needs. `}
            </MowoConvergesThePowe>
          )}
        {!(data.currentVariant === 'ScreenTablet') &&
          !(data.currentVariant === 'ScreenMobile') && (
            <Cols data={data}>
              <LeftCol></LeftCol>
              <RightCol>
                <TopRow>
                  <CuttingEdgeSynergy>
                    <CuttingEdgeSynergySpan1>{`Cutting-Edge `}</CuttingEdgeSynergySpan1>
                    <CuttingEdgeSynergySpan2>{`Synergy`}</CuttingEdgeSynergySpan2>
                  </CuttingEdgeSynergy>
                  <ExpertlyUnitingMicro>
                    {`Expertly uniting Microsoft Surface's prowess with your business vision. Expertly uniting Microsoft Surface's prowess with your business vision.`}
                  </ExpertlyUnitingMicro>
                </TopRow>
                <MiddleRow>
                  <PersonalizedProgress>
                    <PersonalizedProgressSpan1>{`Personalized `}</PersonalizedProgressSpan1>
                    <PersonalizedProgressSpan2>{`Progress`}</PersonalizedProgressSpan2>
                  </PersonalizedProgress>
                  <CateringToYourUnique>
                    {`Catering to your uniqueness, we shape tech solutions for your exact needs. Catering to your uniqueness, we shape tech solutions for your exact needs.`}
                  </CateringToYourUnique>
                </MiddleRow>
                <BottomRow>
                  <CommittedPartnership>
                    <CommittedPartnershipSpan1>{`Committed `}</CommittedPartnershipSpan1>
                    <CommittedPartnershipSpan2>{`Partnership`}</CommittedPartnershipSpan2>
                  </CommittedPartnership>
                  <MoreThanAVendorWeReY>
                    {`More than a vendor, we're your tech ally offering unparalleled support. More than a vendor, we're your tech ally offering unparalleled support.`}
                  </MoreThanAVendorWeReY>
                </BottomRow>
              </RightCol>
            </Cols>
          )}
        {data.currentVariant === 'ScreenTablet' && (
          <UnleashThePowerOfMod1 data={data}>
            <UnleashThePowerOfMod1Span1
              data={data}
            >{`Unleash the Power of `}</UnleashThePowerOfMod1Span1>
            <UnleashThePowerOfMod1Span2
              data={data}
            >{`Modern Work`}</UnleashThePowerOfMod1Span2>
          </UnleashThePowerOfMod1>
        )}
        {data.currentVariant === 'ScreenTablet' && (
          <MowoConvergesThePowe1 data={data}>
            {`MOWO converges the power of Microsoft Surface with your unique business landscape. We not only equip your workforce with cutting-edge technology but tailor solutions to your distinct needs. `}
          </MowoConvergesThePowe1>
        )}
        {data.currentVariant === 'ScreenTablet' && (
          <Cols1 data={data}>
            <LeftCol1></LeftCol1>
            <RightCol1>
              <TopRow1>
                <CuttingEdgeSynergy1>
                  <CuttingEdgeSynergy1Span1>{`Cutting-Edge `}</CuttingEdgeSynergy1Span1>
                  <CuttingEdgeSynergy1Span2>{`Synergy`}</CuttingEdgeSynergy1Span2>
                </CuttingEdgeSynergy1>
                <ExpertlyUnitingMicro1>
                  {`Expertly uniting Microsoft Surface's prowess with your business vision. Expertly uniting Microsoft Surface's prowess with your business vision.`}
                </ExpertlyUnitingMicro1>
              </TopRow1>
              <MiddleRow1>
                <PersonalizedProgress1>
                  <PersonalizedProgress1Span1>{`Personalized `}</PersonalizedProgress1Span1>
                  <PersonalizedProgress1Span2>{`Progress`}</PersonalizedProgress1Span2>
                </PersonalizedProgress1>
                <CateringToYourUnique1>
                  {`Catering to your uniqueness, we shape tech solutions for your exact needs. Catering to your uniqueness, we shape tech solutions for your exact needs.`}
                </CateringToYourUnique1>
              </MiddleRow1>
              <BottomRow1>
                <CommittedPartnership1>
                  <CommittedPartnership1Span1>{`Committed `}</CommittedPartnership1Span1>
                  <CommittedPartnership1Span2>{`Partnership`}</CommittedPartnership1Span2>
                </CommittedPartnership1>
                <MoreThanAVendorWeReY1>
                  {`More than a vendor, we're your tech ally offering unparalleled support. More than a vendor, we're your tech ally offering unparalleled support.`}
                </MoreThanAVendorWeReY1>
              </BottomRow1>
            </RightCol1>
          </Cols1>
        )}
        {data.currentVariant === 'ScreenMobile' && (
          <UnleashThePowerOfMod2 data={data}>
            <UnleashThePowerOfMod2Span1
              data={data}
            >{`Unleash the Power of `}</UnleashThePowerOfMod2Span1>
            <UnleashThePowerOfMod2Span2
              data={data}
            >{`Modern Work`}</UnleashThePowerOfMod2Span2>
          </UnleashThePowerOfMod2>
        )}
        {data.currentVariant === 'ScreenMobile' && (
          <MowoConvergesThePowe2 data={data}>
            {`MOWO converges the power of Microsoft Surface with your unique business landscape. We not only equip your workforce with cutting-edge technology but tailor solutions to your distinct needs. `}
          </MowoConvergesThePowe2>
        )}
        {data.currentVariant === 'ScreenMobile' && (
          <Rows1 data={data}>
            <TopRow2></TopRow2>
            <BottomRow2>
              <TopRow3>
                <CuttingEdgeSynergy2>
                  <CuttingEdgeSynergy2Span1>{`Cutting-Edge `}</CuttingEdgeSynergy2Span1>
                  <CuttingEdgeSynergy2Span2>{`Synergy`}</CuttingEdgeSynergy2Span2>
                </CuttingEdgeSynergy2>
                <ExpertlyUnitingMicro2>
                  {`Expertly uniting Microsoft Surface's prowess with your business vision. Expertly uniting Microsoft Surface's prowess with your business vision.`}
                </ExpertlyUnitingMicro2>
              </TopRow3>
              <MiddleRow2>
                <PersonalizedProgress2>
                  <PersonalizedProgress2Span1>{`Personalized `}</PersonalizedProgress2Span1>
                  <PersonalizedProgress2Span2>{`Progress`}</PersonalizedProgress2Span2>
                </PersonalizedProgress2>
                <CateringToYourUnique2>
                  {`Catering to your uniqueness, we shape tech solutions for your exact needs. Catering to your uniqueness, we shape tech solutions for your exact needs.`}
                </CateringToYourUnique2>
              </MiddleRow2>
              <BottomRow3>
                <CommittedPartnership2>
                  <CommittedPartnership2Span1>{`Committed `}</CommittedPartnership2Span1>
                  <CommittedPartnership2Span2>{`Partnership`}</CommittedPartnership2Span2>
                </CommittedPartnership2>
                <MoreThanAVendorWeReY2>
                  {`More than a vendor, we're your tech ally offering unparalleled support. More than a vendor, we're your tech ally offering unparalleled support.`}
                </MoreThanAVendorWeReY2>
              </BottomRow3>
            </BottomRow2>
          </Rows1>
        )}
      </Rows>
      <ColorStroke>
        <Rectangle173></Rectangle173>
        <Rectangle174></Rectangle174>
        <Rectangle175></Rectangle175>
        <Rectangle176></Rectangle176>
      </ColorStroke>
    </ScreenDesktop>
  );
}

export default ModernWorkplace;
