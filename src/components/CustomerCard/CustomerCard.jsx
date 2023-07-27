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
import LogoImageImage from 'src/assets/images/CustomerCard_Logo.png';
import useCustomerCard from 'src/components/CustomerCard/useCustomerCard';

const StateDefault = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  backgroundColor: `rgba(241, 241, 241, 0.95)`,
  borderRadius: `9px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: `90px`,
  width: `210px`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `15px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  border: data.isActive ? `1px solid rgba(127, 186, 0, 1)` : 'unset',
}));

const Logo = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  backgroundPosition: `center`,
  backgroundSize: `contain`,
  backgroundRepeat: `no-repeat`,
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
  backgroundImage: data.logoSrc,
}));

function CustomerCard(props) {
  const { data } = useCustomerCard();

  return (
    <StateDefault className={props.className} data={data}>
      <Logo data={data}></Logo>
    </StateDefault>
  );
}

export default CustomerCard;
