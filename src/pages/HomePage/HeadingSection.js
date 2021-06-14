import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import Img from '../../components/Img';

const HeadingSection = ({ ...props }) => {
  return (
    <Root {...props}>
      <Logo src="/images/homepage-heading-logo.png" alt="" />
      <Samurai left src="/images/homepage-heading-1.png" alt="" />
      <Samurai right src="/images/homepage-heading-2.png" alt="" />
      <Start src="/images/homepage-heading-start.png" alt="" />
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  height: calc(100vh - 72px);
  background-color: ${colors.black};
  background-image: url('/images/homepage-heading-background.png');
  background-size: cover;
`
const Logo = styled(Img)`
  position: absolute;
  left: 50%;
  top: 45%;
  width: 1084px;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: auto;
  }
`

const Samurai = styled(Img)`
  position: absolute;
  bottom: 0;
  width: 600px;
  ${({ left }) => left && css`left: 0`};
  ${({ right }) => right && css`right: 0`};
  img {
    width: 100%;
    height: auto;
  }
`

const Start = styled(Img)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  width: 214px;
  transform: translate(-50%, -50%);
  cursor: pointer;
`

export default HeadingSection;