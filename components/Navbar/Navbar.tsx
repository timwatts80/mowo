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
import Sidebar from 'components/Sidebar/Sidebar';
import { NavbarProps } from 'types';
import useNavbar from 'components/Navbar/useNavbar';

const ScreenDesktop: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Background']['Background'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100vw',
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `16px 60px`,
  boxSizing: `border-box`,
  height: 'auto',
}));

const MowoLogo: any = styled('img')({
  height: `36px`,
  width: `146.59px`,
  alignSelf: `stretch`,
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

const ToolBar: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Background']['Background'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width: `768px`,
  margin: `0px`,
}));

const Quest21: any = styled('img')({
  height: `29.28px`,
  width: `119.21px`,
  objectFit: `cover`,
  margin: `0px`,
});

const HamburgerMenu1: any = styled('div')({
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

const NavFrame: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `0px`,
  top: `0px`,
});

const Sidebar1: any = styled(Sidebar)(({ theme }: any) => ({
  height: `754px`,
  width: `768px`,
  margin: `0px`,
}));

const ToolBar1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Background']['Background'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width: `375px`,
  margin: `0px`,
}));

const Quest211: any = styled('img')({
  height: `29.28px`,
  width: `119.21px`,
  objectFit: `cover`,
  margin: `0px`,
});

const HamburgerMenu2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `6px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Hamburger2: any = styled('img')({
  height: `15px`,
  width: `21px`,
  margin: `0px`,
});

const NavFrame1: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `0px`,
  top: `0px`,
});

const Sidebar2: any = styled(Sidebar)(({ theme }: any) => ({
  width: `375px`,
  height: `758px`,
  margin: `0px`,
}));

function Navbar(props: NavbarProps): JSX.Element {
  const { data, fns } = useNavbar();

  return (
    <ScreenDesktop className={props.className}>
      <MowoLogo
        src={`assets/images/Navbar_MOWO_Logo.png`}
        loading="lazy"
        alt={'MOWO Logo'}
      />
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
      {false && (
        <ToolBar>
          <Quest21
            src={`assets/images/Navbar_Quest2_1.png`}
            loading="lazy"
            alt={'Quest2 1'}
          />
          <HamburgerMenu1 onClick={fns.toggleDialogue}>
            <Hamburger1
              src={`assets/images/Navbar_Hamburger_1.png`}
              loading="lazy"
              alt={'Hamburger'}
            />
          </HamburgerMenu1>
        </ToolBar>
      )}
      <Dialog open={'data.isDialogueOpen'} onClose={undefined}>
        <NavFrame>
          <Sidebar1 open={data.isDialogueOpen} onClose={fns.toggleDialogue} />
        </NavFrame>
      </Dialog>
      {false && (
        <ToolBar1>
          <Quest211
            src={`assets/images/Navbar_Quest2_1_1.png`}
            loading="lazy"
            alt={'Quest2 1'}
          />
          <HamburgerMenu2>
            <Hamburger2
              src={`assets/images/Navbar_Hamburger_2.png`}
              loading="lazy"
              alt={'Hamburger'}
            />
          </HamburgerMenu2>
        </ToolBar1>
      )}
      {false && (
        <NavFrame1>
          <Sidebar2 />
        </NavFrame1>
      )}
    </ScreenDesktop>
  );
}

export default Navbar;
