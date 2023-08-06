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
import SvgIcon from '@mui/material/SvgIcon';
import { Button, SvgIcon } from '@mui/material';
import IconX1 from 'public/assets/images/_IconX.svg';
import { styled } from '@mui/material/styles';
import { Card27Props } from 'types';

const Card271: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Background']['Background'],
  boxShadow: `0px 2px 8px rgba(0, 0, 0, 0.08)`,
  borderRadius: `8px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `30px`,
  boxSizing: `border-box`,
  height: 'auto',
}));

const Top: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const TopTxt: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Title: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Typography']['H5'].fontStyle,
  fontFamily: theme.typography['Typography']['H5'].fontFamily,
  fontWeight: theme.typography['Typography']['H5'].fontWeight,
  fontSize: theme.typography['Typography']['H5'].fontSize,
  letterSpacing: theme.typography['Typography']['H5'].letterSpacing,
  lineHeight: theme.typography['Typography']['H5'].lineHeight,
  textDecoration: theme.typography['Typography']['H5'].textDecoration,
  textTransform: theme.typography['Typography']['H5'].textTransform,
  width: `350px`,
  margin: `0px`,
}));

const Details: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Secondary'],
  fontStyle: theme.typography['Typography']['Body 2'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 2'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 2'].fontWeight,
  fontSize: theme.typography['Typography']['Body 2'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 2'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 2'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 2'].textDecoration,
  textTransform: theme.typography['Typography']['Body 2'].textTransform,
  width: `350px`,
  margin: `2px 0px 0px 0px`,
}));

const Side: any = styled('div')({
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

const IconX2: any = styled(SvgIcon)({
  alignSelf: `stretch`,
  flex: `1`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
});

const Content: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `26px 0px 0px 0px`,
});

const Btns: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const ButtonContained: any = styled(Button)(({ theme }: any) => ({
  margin: `0px`,
  color: theme.palette['Primary']['Contrast'],
  fontStyle: theme.typography['Components']['Button Font - Large'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Large'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Large'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Large'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Large'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Large'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Large'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Large'].textTransform,
}));

const ButtonText: any = styled(Button)(({ theme }: any) => ({
  margin: `0px 0px 0px 12px`,
  color: theme.palette['Primary']['Main'],
  fontStyle: theme.typography['Components']['Button Font - Large'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Large'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Large'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Large'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Large'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Large'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Large'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Large'].textTransform,
}));

function Card27(props: Card27Props): JSX.Element {
  return (
    <Card271 className={props.className}>
      <Top>
        <TopTxt>
          <Title>{`Card Title`}</Title>
          <Details>{`Lorem ipsum test to be seen.`}</Details>
        </TopTxt>
        <Side>
          <IconX2
            fontSize={'inherit'}
            htmlColor="rgba(0, 0, 0, 1)"
            component={IconX1}
          />
        </Side>
      </Top>
      <Content>
        <Btns>
          <ButtonContained
            variant="contained"
            size={'large'}
            color={'primary'}
            disabled={false}
          >
            {'Download'}
          </ButtonContained>
          <ButtonText
            variant="text"
            size={'large'}
            color={'primary'}
            disabled={false}
          >
            {'Skip'}
          </ButtonText>
        </Btns>
      </Content>
    </Card271>
  );
}

export default Card27;
