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
import Link1 from 'components/Link1/Link1';
import { MenulinklistProps } from 'types';

const Menulinklist1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: `400px`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const Link2: any = styled(Link1)(({ theme }: any) => ({
  alignSelf: `stretch`,
  height: `42px`,
  margin: `0px`,
}));

function Menulinklist(props: MenulinklistProps): JSX.Element {
  return (
    <Menulinklist1 className={props.className}>
      <Link2 {...props} />
    </Menulinklist1>
  );
}

export default Menulinklist;
