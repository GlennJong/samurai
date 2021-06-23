import React from 'react';
import styled from 'styled-components';
import Img from '../../components/Img';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';

const DescriptionSection = ({ wording, ...props }) => {
  return (
    <Root {...props}>
      <Background><Img src="/images/homepage-description-background.png" /></Background>
      <Content>
        <div className="wrap">
          <Icon src="/images/icon-lock.svg" />
          <p>{ wording.title }</p>
          <p>{ wording.subtitle }</p>
        </div>
      </Content>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
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

const Background = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${colors.black};
    opacity: .5;
    z-index: 1;
  }
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  z-index: 1;
  .wrap {
    margin: 0 auto;
    width: 880px;
    max-width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color: ${colors.white};
    ${respondTo.lg} {
      font-size: 24px;
    }
    ${respondTo.md} {
      font-size: 18px;
    }
    p + p {
      margin-top: 60px;
      ${respondTo.lg} {
        font-size: 40px;
      }
      ${respondTo.md} {
        margin-top: 36px;
      }
    }
  }
`

export default DescriptionSection;