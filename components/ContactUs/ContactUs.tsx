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
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ContactUsProps } from 'types';
import useContactUs from 'components/ContactUs/useContactUs';

const Desktop: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  backgroundColor: theme.palette['Background']['Background'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection:
    data.currentVariant === 'Tablet'
      ? `column`
      : data.currentVariant === 'Mobile'
      ? `column`
      : `row`,
  width: '100vw',
  justifyContent:
    data.currentVariant === 'Tablet'
      ? `center`
      : data.currentVariant === 'Mobile'
      ? `center`
      : `flex-start`,
  alignItems:
    data.currentVariant === 'Tablet'
      ? `flex-start`
      : data.currentVariant === 'Mobile'
      ? `flex-start`
      : `center`,
  padding:
    data.currentVariant === 'Tablet'
      ? `30px 100px`
      : data.currentVariant === 'Mobile'
      ? `24px`
      : `60px 100px`,
  boxSizing: `border-box`,
  height: 'auto',
}));

const Form1: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `40px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin:
    data.currentVariant === 'Tablet'
      ? `24px 0px 0px 0px`
      : data.currentVariant === 'Mobile'
      ? `24px 0px 0px 0px`
      : `0px`,
  overflow: `hidden`,
  width:
    data.currentVariant === 'Tablet'
      ? `570px`
      : data.currentVariant === 'Mobile'
      ? `570px`
      : 'unset',
}));

const ContactUs1Span1: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const ContactUs1Span2: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const ContactUs1Span3: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const ContactUs1: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
  margin: `0px`,
});

const Frame3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const Row1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const TextFieldStandard: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `0px`,
});

const TextFieldStandard1: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const Row2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px 0px 0px 40px`,
});

const TextFieldStandard2: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `0px`,
});

const TextFieldStandard3: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const TextFieldStandard4: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const Btm: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const ButtonContained: any = styled(Button)({
  alignSelf: `stretch`,
  margin: `0px`,
});

const Frame141: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `40px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin:
    data.currentVariant === 'Tablet'
      ? `24px 0px 0px 0px`
      : data.currentVariant === 'Mobile'
      ? `24px 0px 0px 0px`
      : `0px 0px 0px 100px`,
  width:
    data.currentVariant === 'Tablet'
      ? `570px`
      : data.currentVariant === 'Mobile'
      ? `570px`
      : 'unset',
}));

const ÞaðErLíkaSpurningUmA: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(105, 105, 105, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  flex: `1`,
  margin: `0px`,
});

const Frame139: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `40px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width:
    data.currentVariant === 'Tablet'
      ? 'unset'
      : data.currentVariant === 'Mobile'
      ? 'unset'
      : `568px`,
  margin:
    data.currentVariant === 'Tablet'
      ? `0px`
      : data.currentVariant === 'Mobile'
      ? `24px 0px 0px 0px`
      : `0px 0px 0px 100px`,
}));

const ÞaðErLíkaSpurningUmA1: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(105, 105, 105, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  flex: `1`,
  margin: `0px`,
});

const Form11: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `40px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width:
    data.currentVariant === 'Tablet'
      ? 'unset'
      : data.currentVariant === 'Mobile'
      ? 'unset'
      : `568px`,
  margin:
    data.currentVariant === 'Tablet'
      ? `24px 0px 0px 0px`
      : data.currentVariant === 'Mobile'
      ? `24px 0px 0px 0px`
      : `0px 0px 0px 100px`,
  overflow: `hidden`,
}));

const ContactUs2Span1: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const ContactUs2Span2: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const ContactUs2Span3: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const ContactUs2: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
  margin: `0px`,
});

const Frame31: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const Row11: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const TextFieldStandard5: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `0px`,
});

const TextFieldStandard6: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const Row21: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px 0px 0px 40px`,
});

const TextFieldStandard7: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `0px`,
});

const TextFieldStandard8: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const TextFieldStandard9: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const Btm1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const ButtonContained1: any = styled(Button)({
  alignSelf: `stretch`,
  margin: `0px`,
});

const Frame140: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `40px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width:
    data.currentVariant === 'Tablet'
      ? 'unset'
      : data.currentVariant === 'Mobile'
      ? 'unset'
      : `327px`,
  margin:
    data.currentVariant === 'Tablet'
      ? `24px 0px 0px 0px`
      : data.currentVariant === 'Mobile'
      ? `0px`
      : `0px 0px 0px 100px`,
}));

const ÞaðErLíkaSpurningUmA2: any = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(105, 105, 105, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  flex: `1`,
  margin: `0px`,
});

const Form12: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `40px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width:
    data.currentVariant === 'Tablet'
      ? 'unset'
      : data.currentVariant === 'Mobile'
      ? 'unset'
      : `327px`,
  margin:
    data.currentVariant === 'Tablet'
      ? `24px 0px 0px 0px`
      : data.currentVariant === 'Mobile'
      ? `24px 0px 0px 0px`
      : `0px 0px 0px 100px`,
  overflow: `hidden`,
}));

const ContactUs3Span1: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const ContactUs3Span2: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const ContactUs3Span3: any = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
  textAlign: 'unset',
  fontSynthesis: 'unset',
  margin: 'unset',
});

const ContactUs3: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Segoe UI`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
  margin: `0px`,
});

const TextFieldStandard10: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const TextFieldStandard11: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const TextFieldStandard12: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const TextFieldStandard13: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const TextFieldStandard14: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const Btm2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const ButtonContained2: any = styled(Button)({
  alignSelf: `stretch`,
  margin: `0px`,
});

function ContactUs(props: ContactUsProps): JSX.Element {
  const { data } = useContactUs();

  return (
    <Desktop className={props.className} data={data}>
      {!(data.currentVariant === 'Tablet') &&
        !(data.currentVariant === 'Mobile') && (
          <Form1 data={data}>
            <ContactUs1>
              <ContactUs1Span1>{`Contact`}</ContactUs1Span1>
              <ContactUs1Span2>{` `}</ContactUs1Span2>
              <ContactUs1Span3>{`Us`}</ContactUs1Span3>
            </ContactUs1>
            <Frame3>
              <Row1>
                <TextFieldStandard
                  variant="standard"
                  size="small"
                  label={`Full Name`}
                />
                <TextFieldStandard1
                  variant="standard"
                  size="small"
                  label={`Phone`}
                />
              </Row1>
              <Row2>
                <TextFieldStandard2
                  variant="standard"
                  size="small"
                  label={`Company`}
                />
                <TextFieldStandard3
                  variant="standard"
                  size="small"
                  label={`Email`}
                />
              </Row2>
            </Frame3>
            <TextFieldStandard4
              variant="standard"
              size="small"
              label={`Comments`}
            />
            <Btm>
              <ButtonContained variant="contained" size="large" color="primary">
                {' '}
                Submit{' '}
              </ButtonContained>
            </Btm>
          </Form1>
        )}
      {!(data.currentVariant === 'Tablet') &&
        !(data.currentVariant === 'Mobile') && (
          <Frame141 data={data}>
            <ÞaðErLíkaSpurningUmA>
              {`Það er líka spurning um að setja frekar 3 paragraphs hér eins og í Modern Workplace uppi og nota punktana 3 frá GPT - Certified partner, end-to-end solutions og það?`}
            </ÞaðErLíkaSpurningUmA>
          </Frame141>
        )}
      {data.currentVariant === 'Tablet' && (
        <Frame139 data={data}>
          <ÞaðErLíkaSpurningUmA1>
            {`Það er líka spurning um að setja frekar 3 paragraphs hér eins og í Modern Workplace uppi og nota punktana 3 frá GPT - Certified partner, end-to-end solutions og það?`}
          </ÞaðErLíkaSpurningUmA1>
        </Frame139>
      )}
      {data.currentVariant === 'Tablet' && (
        <Form11 data={data}>
          <ContactUs2>
            <ContactUs2Span1>{`Contact`}</ContactUs2Span1>
            <ContactUs2Span2>{` `}</ContactUs2Span2>
            <ContactUs2Span3>{`Us`}</ContactUs2Span3>
          </ContactUs2>
          <Frame31>
            <Row11>
              <TextFieldStandard5
                variant="standard"
                size="small"
                label={`Full Name`}
              />
              <TextFieldStandard6
                variant="standard"
                size="small"
                label={`Phone`}
              />
            </Row11>
            <Row21>
              <TextFieldStandard7
                variant="standard"
                size="small"
                label={`Company`}
              />
              <TextFieldStandard8
                variant="standard"
                size="small"
                label={`Email`}
              />
            </Row21>
          </Frame31>
          <TextFieldStandard9
            variant="standard"
            size="small"
            label={`Comments`}
          />
          <Btm1>
            <ButtonContained1 variant="contained" size="large" color="primary">
              {' '}
              Submit{' '}
            </ButtonContained1>
          </Btm1>
        </Form11>
      )}
      {data.currentVariant === 'Mobile' && (
        <Frame140 data={data}>
          <ÞaðErLíkaSpurningUmA2>
            {`Það er líka spurning um að setja frekar 3 paragraphs hér eins og í Modern Workplace uppi og nota punktana 3 frá GPT - Certified partner, end-to-end solutions og það?`}
          </ÞaðErLíkaSpurningUmA2>
        </Frame140>
      )}
      {data.currentVariant === 'Mobile' && (
        <Form12 data={data}>
          <ContactUs3>
            <ContactUs3Span1>{`Contact`}</ContactUs3Span1>
            <ContactUs3Span2>{` `}</ContactUs3Span2>
            <ContactUs3Span3>{`Us`}</ContactUs3Span3>
          </ContactUs3>
          <TextFieldStandard10
            variant="standard"
            size="small"
            label={`Full Name`}
          />
          <TextFieldStandard11
            variant="standard"
            size="small"
            label={`Company`}
          />
          <TextFieldStandard12
            variant="standard"
            size="small"
            label={`Phone`}
          />
          <TextFieldStandard13
            variant="standard"
            size="small"
            label={`Email`}
          />
          <TextFieldStandard14
            variant="standard"
            size="small"
            label={`Comments`}
          />
          <Btm2>
            <ButtonContained2 variant="contained" size="large" color="primary">
              {' '}
              Submit{' '}
            </ButtonContained2>
          </Btm2>
        </Form12>
      )}
    </Desktop>
  );
}

export default ContactUs;
