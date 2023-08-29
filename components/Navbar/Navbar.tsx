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
import Sidebar from 'components/Sidebar/Sidebar';
import { NavbarProps } from 'types';
import useNavbar from 'components/Navbar/useNavbar';

const ScreenDesktop: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `sticky`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  top: `0`,
  zIndex: `3000`,
}));

const ToolBar: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  backgroundColor: theme.palette['MOWO']['white-75'],
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems:
    data.currentVariant === 'ScreenTablet'
      ? `flex-start`
      : data.currentVariant === 'ScreenMobile'
      ? `flex-start`
      : `center`,
  padding:
    data.currentVariant === 'ScreenTablet'
      ? `16px`
      : data.currentVariant === 'ScreenMobile'
      ? `16px`
      : `16px 32px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Logocontainer: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `29.28px`,
  margin: `0px`,
});

const MowoLogo: any = styled('img')({
  height: `29.28px`,
  width: `119.21px`,
  objectFit: `cover`,
  margin: `0px`,
});

const MenuItems: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
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

const ModernWorkplace: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `21px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  margin: `0px`,
}));

const Solutions: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `21px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  margin: `0px 0px 0px 48px`,
}));

const Devices: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `21px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  margin: `0px 0px 0px 48px`,
}));

const Cases: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `21px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  margin: `0px 0px 0px 48px`,
}));

const Contact: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `21px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  margin: `0px 0px 0px 48px`,
}));

const HamburgerMenu: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `6px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 48px`,
});

const Hamburger: any = styled('img')({
  height: `15px`,
  width: `21px`,
  margin: `0px`,
});

const ButtonContained: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  alignSelf: `stretch`,
  margin: `0px 0px 0px 48px`,
  color: theme.palette['Primary']['Contrast'],
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

const HamburgerMenu1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `6px`,
  boxSizing: `border-box`,
  margin: `0px`,
  cursor: `pointer`,
});

const Hamburger1: any = styled('img')({
  height: `15px`,
  width: `21px`,
  margin: `0px`,
});

const Sidebarcontainer: any = styled('div')({
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
  maxWidth: '100%',
  top: '0px',
});

const Sidebar1: any = styled(Sidebar, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

function Navbar(props: NavbarProps): JSX.Element {
  const { data, fns } = useNavbar();

  return (
    <ScreenDesktop className={props.className} data={data}>
      <ToolBar data={data}>
        <Logocontainer>
          <MowoLogo
            src={`assets/images/Navbar_MOWO_Logo.png`}
            loading="lazy"
            alt={'MOWO_Logo'}
          />
        </Logocontainer>
        {!(data.currentVariant === 'ScreenTablet') &&
          !(data.currentVariant === 'ScreenMobile') && (
            <MenuItems data={data}>
              <ModernWorkplace>{`Modern Workplace`}</ModernWorkplace>
              <Solutions>{`Solutions`}</Solutions>
              <Devices>{`Devices`}</Devices>
              <Cases>{`Cases`}</Cases>
              <Contact>{`Contact`}</Contact>
              {false && (
                <HamburgerMenu>
                  <Hamburger
                    src={`assets/images/Navbar_Hamburger.png`}
                    loading="lazy"
                    alt={'Hamburger'}
                  />
                </HamburgerMenu>
              )}
              <ButtonContained
                variant="contained"
                size={'medium'}
                color={'primary'}
                disabled={false}
                data={data}
              >
                {'Book a meeting'}
              </ButtonContained>
            </MenuItems>
          )}
        {(data.currentVariant === 'ScreenTablet' ||
          data.currentVariant === 'ScreenMobile') && (
          <HamburgerMenu1 onClick={fns.toggleDialog}>
            <Hamburger1
              src={`assets/images/Navbar_Hamburger_1.png`}
              loading="lazy"
              alt={'Hamburger'}
            />
          </HamburgerMenu1>
        )}
      </ToolBar>
      {(data.currentVariant === 'ScreenTablet' ||
        data.currentVariant === 'ScreenMobile') && (
        <Sidebarcontainer props={data.isDialogOpen} postition={'absolute'}>
          <Sidebar1
            data={data}
            open={data.isDialogOpen}
            onClose={fns.toggleDialog}
          />
        </Sidebarcontainer>
      )}
    </ScreenDesktop>
  );
}

export default Navbar;
