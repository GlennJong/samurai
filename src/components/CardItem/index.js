import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import Img from '../Img';

const CardItem = ({ size, data, ...props }) => {
  const { samurai, heading, background, qty } = data;
  if (size === "lg") {
    return (
      <Root background={background} size="lg" {...props}>
        <Button><Img src="/images/homepage-button-icon.png" /></Button>
        <Heading src={heading} />
        <SamuraiList>
          { samurai.map((item, i) =>
            <SamuraiItem size="lg" length={samurai.length} key={i} index={i} src={item} />
          ) }
        </SamuraiList>
        <Qty size="lg" src={qty} />
      </Root>
    )
  }
  else if (size === 'sm') {
    return (
      <Root background={background} size="sm" {...props}>
        <Button><Img src="/images/homepage-button-icon.png" /></Button>
        <Heading src={heading} />
        <SamuraiList>
          { samurai.map((item, i) =>
            <SamuraiItem size="sm" length={samurai.length} key={i} index={i} src={item} />
          ) }
        </SamuraiList>
        <Qty size="sm" src={qty} />
      </Root>
    )
  }
}

const Root = styled.div`
  position: relative;
  background-color: ${({ background }) => background };
  padding-top: 120px;
  overflow: hidden;
  ${({ size }) => size === 'lg' && css`
    width: 100%;
    background-image: url('/images/homepage-card-background.png');
    background-position: top center;
    background-size: cover;
  `}
  ${({ size }) => size === 'sm' && css`
    width: 33.33%;
  `}
`

const SamuraiList = styled.div`
  position: relative;
  width: 60%;
  white-space: nowrap;
`
const SamuraiItem = styled(Img)`
  display: inline-block;
  position: relative;
  ${({ size }) => size === 'lg' && css`width: 50%`};
  ${({ size }) => size === 'sm' && css`width: 100%`};
  ${({ size, index }) => size === 'lg' && css`left: ${index * -20}%`};
  bottom: -5px;
  z-index: ${({ length, index }) => (index-length)*-1 };
`

const Button = styled.button`
  position: absolute;
  top: 28px;
  right: 36px;
  width: 58px;
  border: 0;
  background: transparent;
`

const Heading = styled(Img)`
  position: absolute;
  top: 12px;
  left: 0;
  width: 80%;
`

const Qty = styled(Img)`
  position: absolute;
  right: 32px;
  bottom: 16px;
  ${({ size }) => size === 'lg' && css`width: 160px`};
  ${({ size }) => size === 'sm' && css`width: 80px`};
  z-index: 2;
`


export default CardItem;