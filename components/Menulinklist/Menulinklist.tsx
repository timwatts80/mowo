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
import useMenulinklist from 'components/Menulinklist/useMenulinklist';

const Menulinklist1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const Link2: any = styled(Link1)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

function Menulinklist(props: MenulinklistProps): JSX.Element {
  const { data } = useMenulinklist();

  return (
    <Menulinklist1 className={props.className}>
      {data.menuLinks &&
        data.menuLinks.map((menuLink: any, index: number) => {
          return <Link2 key={index} menuLinks={menuLink}/>;
        })}
    </Menulinklist1>
  );
}

export default Menulinklist;