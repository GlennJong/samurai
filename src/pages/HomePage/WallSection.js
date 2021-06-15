import React from 'react';
import styled from 'styled-components';
import Img from '../../components/Img';
import { colors } from '../../constants/colors';

const WallSection = ({ wording, ...props }) => {
  return (
    <Root {...props}>
      <Heading>
        <Decorations />
        <Title>{ wording.title }</Title>
        <Line src="/images/homepage-wall-line.svg" />
        <Title>{ wording.subtitle }</Title>
      </Heading>
      <Wall qty={45} />
    </Root>
  )
}

const Decorations = () => {
  return (
    <DecorationList>
      <DecorationItem left={0} top={0} src="/images/homepage-wall-1.png" />
      <DecorationItem src="/images/homepage-wall-2.png" />
      <DecorationItem src="/images/homepage-wall-3.png" />
      <DecorationItem src="/images/homepage-wall-4.png" />
      <DecorationItem src="/images/homepage-wall-5.png" />
      <DecorationItem src="/images/homepage-wall-6.png" />
      <DecorationItem src="/images/homepage-wall-7.png" />
      <DecorationItem src="/images/homepage-wall-8.png" />
    </DecorationList>
  )
}

const Wall = ({ qty }) => {

  function renderWallItem() {
    let items = [];
    const list = ["21.png", "9.png", "29.png", "38.png", "73.png", "83.png", "89.png", "90.png", "109.png", "117.png", "129.png", "166.png", "179.png", "184.png", "223.png", "232.png", "312.png", "328.png", "351.png", "375.png", "514.png", "822.png", "892.png", "1114.png", "1380.png", "1397.png", "1550.png", "1590.png", "1628.png", "1654.png", "1899.png", "1910.png", "1981.png", "2109.png", "2410.png", "2961.png", "3228.png", "3267.png", "3517.png", "3862.png", "3863.png", "5142.png", "5143.png", "5870.png", "6865.png", "7312.png", "8236.png"];

    for (let i = 0; i < qty; i++) {
      items.push(<WallItem><Img src={`/images/samurai/${list[i]}`} /></WallItem>);
    };
    
    return items;
  }
  return (
    <WallWrapper>
      { renderWallItem() }
    </WallWrapper>
  )
}

const Root = styled.div`
  background: ${colors.black};
`

const Heading = styled.div`
  position: relative;
  padding: 370px 0;
  color: ${colors.white};
  font-size: 36px;
  font-weight: 600;
`

const Line = styled(Img)`
  margin: 55px auto;
  width: 570px;
  max-width: 50%;
`
const Title = styled.div`
  margin: 0 auto;
  width: 800px;
  text-align: center;
`

const DecorationList = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`
const DecorationItem = styled(Img)`
  position: absolute;
  width: 450px;
  ${({ left }) => left && `left: ${left}%`};
  ${({ right }) => right && `right: ${right}%`};
  ${({ top }) => top && `top: ${top}%`};
  ${({ bottom }) => bottom && `bottom: ${bottom}%`};
`

const WallWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const WallItem = styled.div`
  width: calc(100% / 9);
  height: auto;
`

export default WallSection;