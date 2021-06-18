import React from 'react';
import styled from 'styled-components';
import Img from '../../components/Img';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';

const DescriptionSection = ({ wording, ...props }) => {
  return (
    <Root {...props}>
      <Icon src="/images/icon-lock.svg" />
      <Content>
        <p>{ wording.title }</p>
        <p>{ wording.subtitle }</p>
      </Content>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  padding-top: 105px;
  padding-bottom: 118px;
  background-color: ${colors.black};
  z-index: 0;
  ${respondTo.md} {
    padding-top: 60px;
    padding-bottom: 72px;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/homepage-description-background.png');
    background-size: cover;
    opacity: 0.5;
    z-index: -1;
  }
`

const Icon = styled(Img)`
  margin: 0 auto;
  margin-bottom: 16px;
  width: 75px;
  ${respondTo.md} {
    width: 52px;
    margin-bottom: 25px;
  }
`

const Content = styled.div`
  margin: 0 auto;
  width: 880px;
  max-width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: ${colors.white};
  ${respondTo.md} {
    padding: 0 32px;
    font-size: 18px;
    box-sizing: border-box;
  }
  p + p {
    margin-top: 60px;
    ${respondTo.md} {
      margin-top: 36px;
    }
  }
`

export default DescriptionSection;