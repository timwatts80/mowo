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
import Link1 from 'components/Link1/Link1';
import { SidebarProps } from 'types';

const Sidebar1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Background']['Paper'],
  boxShadow: `0px 1px 8px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.2)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: 'auto',
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `16px 30px 20px 30px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
}));

const MenuItems: any = styled('div')({
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
});

const CloseFrame: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Close: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `10px`,
  boxSizing: `border-box`,
  margin: `0px`,
  cursor: `pointer`,
});

const X: any = styled('img')({
  height: `18px`,
  width: `18px`,
  margin: `0px`,
});

const LogoPosition: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `90px`,
  margin: `26px 0px 0px 0px`,
});

const Logo: any = styled('div')({
  backgroundImage: `url(assets/images/sidebar_logo.png)`,
  backgroundPosition: `center`,
  backgroundSize: `contain`,
  backgroundRepeat: `no-repeat`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
  overflow: `hidden`,
});

const Items: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `30px 0px`,
  boxSizing: `border-box`,
  flex: `1`,
  width: `300px`,
  margin: `26px 0px 0px 0px`,
});

const Link2: any = styled(Link1)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Link3: any = styled(Link1)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `26px 0px 0px 0px`,
}));

const Link4: any = styled(Link1)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `26px 0px 0px 0px`,
}));

const Link5: any = styled(Link1)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `26px 0px 0px 0px`,
}));

const Link6: any = styled(Link1)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `26px 0px 0px 0px`,
}));

const ButtonContained: any = styled(Button)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `26px 0px 0px 0px`,
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

function Sidebar(props: SidebarProps): JSX.Element {
  return (
    props.open && (
      <Sidebar1 className={props.className}>
        <MenuItems>
          <CloseFrame>
            <Close onClick={props.onClose}>
              <X src={`assets/images/sidebar_x.png`} loading="lazy" alt={'x'} />
            </Close>
          </CloseFrame>
          <LogoPosition>
            <Logo></Logo>
          </LogoPosition>
          <Items>
            <Link2 />
            <Link3 />
            <Link4 />
            <Link5 />
            <Link6 />
            <ButtonContained
              variant="contained"
              size={'medium'}
              color={'primary'}
              disabled={false}
            >
              {'Book a meeting'}
            </ButtonContained>
          </Items>
        </MenuItems>
      </Sidebar1>
    )
  );
}

export default Sidebar;
