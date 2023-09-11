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
import { IconMixedProps } from 'types';

const IconMixed1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `24px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const IconMixed2: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  left: `0px`,
  top: `0px`,
});

const CheckboxIndeterminat: any = styled('img')({
  height: `18px`,
  width: `18px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

function IconMixed(props: IconMixedProps): JSX.Element {
  return (
    <IconMixed1 className={props.className}>
      <IconMixed2>
        <CheckboxIndeterminat
          src={`assets/images/IconMixed_checkbox_indeterminate.png`}
          loading="lazy"
          alt={'checkbox_indeterminate'}
        />
      </IconMixed2>
    </IconMixed1>
  );
}

export default IconMixed;