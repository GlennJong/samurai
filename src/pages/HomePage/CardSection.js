import React from 'react';
import styled from 'styled-components';
import Img from '../../components/Img';
import { colors } from '../../constants/colors';
import { nl2br } from '../../utils/wordingSystem';

const CardSection = ({ wording, ...props }) => {
  return (
    <Root {...props}>
      <Heading>
        <Cloud className="cloud -right" src="/images/homepage-news-cloud-1.png" />
        <Cloud className="cloud -left" src="/images/homepage-news-cloud-2.png" />
        <div className="title">{ nl2br(wording.heading) }</div>
      </Heading>
      <CardWrapper>
        <BigCard></BigCard>
        <SmallCardWrap>
          <SmallCardItem />
        </SmallCardWrap>
      </CardWrapper>
    </Root>
  )
}

const SmallCardItem = () => {
  return (
    <div></div>
  )
}

const Root = styled.div``

const Heading = styled.div`
  position: relative;
  padding: 124px 0;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  color: ${colors.white};
  background-color: ${colors.black};
  overflow: hidden;
  .cloud {
    position: absolute;
    &.-left {
      left: -30%;
      bottom: -70%;
    }
    &.-right {
      right: -30%;
      top: -70%;
    }
  }
`
const Cloud = styled(Img)`
  width: 60%;
  height: auto;
`

const CardWrapper = styled.div`
  
`

const BigCard = styled.div`
`

const SmallCardWrap = styled.div`
  
`

export default CardSection;