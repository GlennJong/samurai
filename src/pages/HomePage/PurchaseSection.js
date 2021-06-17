import React, { useState } from 'react';
import styled from 'styled-components';
import Img from '../../components/Img';
import { colors } from '../../constants/colors';
import { nl2br } from '../../utils/wordingSystem';
import { Plus, Minus } from '../../components/Icons';

const Section = ({ wording, ...props }) => {
  const [ qty, setQty ] = useState(0);

  function handleAddQty() {
    let currentQty = Math.max(qty+1, 0);
    setQty(currentQty);
  }

  function handleDecreaseQty() {
    let currentQty = Math.max(qty-1, 0);
    setQty(currentQty);
  }
  
  return (
    <Root {...props}>
      <BuyWrapper>
        <Container>
          <Cover src="/images/homepage-purchase-cover.png" />
          <Purchase>
            <Img className="logo" src="/images/homepage-purchase-logo.png" />
            <p className="info">{ nl2br(wording.title) }</p>
            { wording.items.map((item, i) => 
              <p className="info" key={i}>{item.title} : {item.percent}%</p>
            ) }
            <Price>
              <div className="title">{wording.price}</div>
              <div className="amount">
                <Img className="icon" src="/images/icon-coin.svg" />
                <p className="price">0.03</p>
                <p className="hint">($115.77)</p>
              </div>
            </Price>
            <Qty>
              <div className="title">{wording.quantity}</div>
              <div className="buy">
                <QtySelector qty={qty} 
                  onPlusClick={handleAddQty}
                  onMinusClick={handleDecreaseQty}
                />
                <p className="hint">9999 REMAINING</p>
              </div>
            </Qty>
            <BuyButton>{wording.purchase}</BuyButton>
          </Purchase>
        </Container>
      </BuyWrapper>
      <SoldWrapper>
        <Container>
          <SoldList>
            { wording.sold.map((item, i) =>
              <SoldItem key={i}>
                <div className="percent">
                  <p className="value"><span>{item.percent}</span><span className="unit">%</span></p>
                  <p className="sold">SOLD</p>
                </div>
                <div className="content">{nl2br(item.content)}</div>
              </SoldItem>
            ) }
          </SoldList>
        </Container>
      </SoldWrapper>
    </Root>
  )
}

const QtySelector = ({ qty, onPlusClick, onMinusClick }) => {
  return (
    <Selector>
      <button onClick={onMinusClick}><Minus /></button>
      <p className="qty">{ qty }</p>
      <button onClick={onPlusClick}><Plus /></button>
    </Selector>
  )
}



const Root = styled.div`
  background: ${colors.black};
`
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 980px;
`
const BuyWrapper = styled.div`
  position: relative;
  padding-top: 250px;
  padding-bottom: 280px;
  z-index: 0;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: -25%;
    width: 750px;
    height: 420px;
    background-image: url('/images/cloud-1.png');
    background-size: contain;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -10%;
    width: 750px;
    height: 420px;
    background-image: url('/images/cloud-1.png');
    background-size: contain;
    z-index: -1;
  }
`

const Cover = styled(Img)`
  width: 55%;
`

const Purchase = styled.div`
  padding-left: 140px;
  width: 45%;
  color: ${colors.white};
  box-sizing: border-box;
  .logo {
    margin-bottom: 6px;
  }
  .info {
    margin-left: 4px;
    font-size: 18px;
  }
`

const Price = styled.div`
  margin-top: 30px;
  margin-bottom: 8px;
  .title {
    font-size: 18px;
  }
  .amount {
    .icon {
      display: inline-block;
      vertical-align: baseline;
      margin-right: 12px;
      width: 26px;
    }
    .price {
      display: inline-block;
      vertical-align: baseline;
      margin-right: 8px;
      font-size: 48px;
      font-weight: 900;
    }
    .hint {
      display: inline-block;
      position: relative;
      top: -2px;
      vertical-align: baseline;
      font-size: 18px;
    }
  }
`

const Qty = styled.div`
  margin-top: 30px;
  .title {
    margin-bottom: 14px;
    font-size: 18px;
  }
  .buy {
    display: flex;
    .hint {
      margin-left: 12px;
      font-size: 18px;
    }
  }
`

const BuyButton = styled.button`
  border: 0;
  margin-top: 72px;
  width: 180px;
  height: 60px;
  background: ${colors.white};
  color: ${colors.black};
  font-size: 20px;
  font-weight: 900;
`
const Selector = styled.div`
  display: flex;
  button {
    border: 1px solid ${colors.white};
    padding: 0;
    width: 32px;
    height: 32px;
    background: transparent;
    line-height: 1;
    font-size: 12px;
    color: ${colors.white};
    &:hover {
      background: ${colors.white};
      color: ${colors.black};
    }
  }
  .qty {
    border-top: 1px solid ${colors.white};
    border-bottom: 1px solid ${colors.white};
    height: 30px;
    width: 60px;
    line-height: 30px;
    font-size: 24px;
    font-weight: 900;
    text-align: center;
  }
`

const SoldWrapper = styled.div`
  position: relative;
  padding-bottom: 100px;
  z-index: 0;
  background-image: url('/images/homepage-purchase-background.png');
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: 640px;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    bottom: 10%;
    right: 0%;
    width: 750px;
    height: 420px;
    background-image: url('/images/cloud-1.png');
    background-size: contain;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 600px;
    height: 600px;
    background-image: url('/images/home-purchase-samurai.png');
    background-size: contain;
    z-index: -1;
  }
`
const SoldList = styled.div`
  width: 360px;
`
const SoldItem = styled.div`
  display: flex;
  margin-bottom: 24px;
  color: ${colors.white};
  .percent {
    margin-right: 24px;
    .value {
      white-space: nowrap;
      span:first-child {
        display: inline-block;
        vertical-align: baseline;
        margin-right: 2px;
        font-size: 40px;
        line-height: 40px;
        font-weight: 900;
      }
      span:nth-child(2) {
        display: inline-block;
        vertical-align: baseline;
        font-size: 12px;
        font-weight: 900;
      }
    }
    .sold {
      font-size: 12px;
      font-weight: 900;
    }
  }
  .content {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
  }
`

export default Section;