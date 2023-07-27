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
import { NavbarProps } from 'types';

const Navbar1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `16px 60px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const Logo: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Quest21: any = styled('img')({
  height: `36px`,
  width: `146.59px`,
  objectFit: `cover`,
  margin: `0px`,
});

const MenuItems: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

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

const ButtonContained: any = styled(Button)(({ theme }: any) => ({
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

function Navbar(props: NavbarProps): JSX.Element {
  return (
    <Navbar1 className={props.className}>
      <Logo>
        <Quest21
          src={`assets/images/Navbar_Quest2_1.png`}
          loading="lazy"
          alt={'Quest2 1'}
        />
      </Logo>
      <MenuItems>
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
        >
          {'Book a meeting'}
        </ButtonContained>
      </MenuItems>
    </Navbar1>
  );
}

export default Navbar;
