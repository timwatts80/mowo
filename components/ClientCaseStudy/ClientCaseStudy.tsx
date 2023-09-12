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
import { ClientCaseStudyProps } from 'types';
import useClientCaseStudy from 'components/ClientCaseStudy/useClientCaseStudy';

const ScreenDesktop: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
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
  maxWidth:
    data.currentVariant === 'ScreenTablet'
      ? `unset`
      : data.currentVariant === 'ScreenMobile'
      ? `unset`
      : `1080px`,
}));

const ClientCaseStudySlide: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: '0 auto',
});

const CaseBackground: any = styled('div')({
  borderRadius: `16px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: '1000px',
  margin: `0px`,
  overflow: `hidden`,
  maxHeight: '550px',
});

const Image1: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height:
    data.currentVariant === 'ScreenTablet'
      ? `450px`
      : data.currentVariant === 'ScreenMobile'
      ? `450px`
      : '100%',
  width:
    data.currentVariant === 'ScreenTablet'
      ? `1320px`
      : data.currentVariant === 'ScreenMobile'
      ? `1320px`
      : 'auto',
  objectFit: `cover`,
  margin: `0px`,
}));

const Casecontentcontainer: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: 'absolute',
  isolation: `isolate`,
  flexDirection:
    data.currentVariant === 'ScreenTablet'
      ? `row`
      : data.currentVariant === 'ScreenMobile'
      ? `row`
      : `column`,
  justifyContent:
    data.currentVariant === 'ScreenTablet'
      ? `center`
      : data.currentVariant === 'ScreenMobile'
      ? `center`
      : `flex-start`,
  alignItems:
    data.currentVariant === 'ScreenTablet'
      ? `flex-start`
      : data.currentVariant === 'ScreenMobile'
      ? `flex-start`
      : `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  height:
    data.currentVariant === 'ScreenTablet'
      ? 'unset'
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `349px`,
  width:
    data.currentVariant === 'ScreenTablet'
      ? `356px`
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `601px`,
  margin: `0px`,
  top: '250px',
  alignSelf: data.currentVariant === 'ScreenMobile' ? `stretch` : 'unset',
}));

const CaseContent: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  backgroundColor: `rgba(241, 241, 241, 0.95)`,
  borderRadius: `15px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent:
    data.currentVariant === 'ScreenMobile' ? `flex-start` : `center`,
  alignItems: data.currentVariant === 'ScreenMobile' ? `center` : `flex-start`,
  padding:
    data.currentVariant === 'ScreenTablet'
      ? `30px`
      : data.currentVariant === 'ScreenMobile'
      ? `17px`
      : `45px`,
  boxSizing: `border-box`,
  alignSelf:
    data.currentVariant === 'ScreenTablet'
      ? 'unset'
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `stretch`,
  margin: `0px`,
  overflow: `hidden`,
  flex:
    data.currentVariant === 'ScreenTablet'
      ? `1`
      : data.currentVariant === 'ScreenMobile'
      ? `1`
      : 'unset',
}));

const CaseText: any = styled('div')({
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
});

const ReykjavikUniversity: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  textAlign: data.currentVariant === 'ScreenMobile' ? `center` : `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize:
    data.currentVariant === 'ScreenTablet'
      ? `26px`
      : data.currentVariant === 'ScreenMobile'
      ? `24px`
      : `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `133.39999914169312%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const WithMicrosoftSurface: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  textAlign: data.currentVariant === 'ScreenMobile' ? `center` : `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 0.75)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize:
    data.currentVariant === 'ScreenTablet'
      ? `16px`
      : data.currentVariant === 'ScreenMobile'
      ? `14px`
      : `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `12px 0px 0px 0px`,
}));

const ButtonContained: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  margin: `30px 0px 0px 0px`,
  color: theme.palette['Success']['Contrast'],
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

const ButtonContained1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Success']['Main'],
  boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `42px`,
  margin: `30px 0px 0px 0px`,
  overflow: `hidden`,
}));

const Base: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `8px 22px`,
  boxSizing: `border-box`,
  margin: `0px`,
  overflow: `hidden`,
});

const MaskedIcon: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `18px`,
  height: `22px`,
  margin: `0px`,
});

const DownloadIcon: any = styled('div')({
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
  left: `-6px`,
  top: `-1px`,
});

const Vector: any = styled('img')({
  height: `16.56px`,
  width: `14px`,
  position: `absolute`,
  left: `2px`,
  top: `3px`,
});

const Button1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Success']['Contrast'],
  fontStyle: `italic`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
  margin: `0px 0px 0px 8px`,
}));

function ClientCaseStudy(props: ClientCaseStudyProps): JSX.Element {
  const { data } = useClientCaseStudy();

  return (
    <ScreenDesktop className={props.className} data={data}>
      <ClientCaseStudySlide>
        <CaseBackground>
          <Image1
            data={data}
            src={props.bgimage.src}
            loading="lazy"
            alt={props.bgimage.alt}
          />
        </CaseBackground>
        <Casecontentcontainer data={data}>
          <CaseContent data={data}>
            <CaseText>
              <ReykjavikUniversity data={data}>
                {props.title}
              </ReykjavikUniversity>
              <WithMicrosoftSurface data={data}>
                {props.description}
              </WithMicrosoftSurface>
            </CaseText>
            <ButtonContained
              variant="contained"
              size={'large'}
              color={'success'}
              disabled={false}
              data={data}
            >
              {'Download Customer Case'}
            </ButtonContained>
            {false && (
              <ButtonContained1>
                <Base>
                  <MaskedIcon>
                    <DownloadIcon>
                      <Vector
                        src={`assets/images/ClientCaseStudy_Vector.png`}
                        loading="lazy"
                        alt={'Vector'}
                      />
                    </DownloadIcon>
                  </MaskedIcon>
                  <Button1>{`Download customer case`}</Button1>
                </Base>
              </ButtonContained1>
            )}
          </CaseContent>
        </Casecontentcontainer>
      </ClientCaseStudySlide>
    </ScreenDesktop>
  );
}

export default ClientCaseStudy;
