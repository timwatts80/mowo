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
import Sidebarcontent from 'components/Sidebarcontent/Sidebarcontent';
import { SidebarProps } from 'types';

const Sidebar1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Background']['Paper'],
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `22px 0px 75px 0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
}));

const CloseFrame: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-end`,
  padding: `0px 30px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
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
  padding: `0px`,
  boxSizing: `border-box`,
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

const Sidebarcontent1: any = styled(Sidebarcontent)(({ theme }: any) => ({
  width: `400px`,
  margin: `0px`,
}));

function Sidebar(props: SidebarProps): JSX.Element {
  return (
    <Sidebar1 className={props.className}>
      <CloseFrame>
        <Close>
          <Icon1>
            <IconX>
              <Close1
                src={`assets/images/sidebar_Close.png`}
                loading="lazy"
                alt={'Close'}
              />
            </IconX>
          </Icon1>
        </Close>
      </CloseFrame>
      <Sidebarcontent1 />
    </Sidebar1>
  );
}

export default Sidebar;
