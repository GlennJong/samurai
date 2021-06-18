import React, { useState } from 'react';
import styled from 'styled-components';
import Img from '../../components/Img';
import ModalBox from '../../components/ModalBox';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { detectMob } from '../../utils/methods';

const GallerySection = ({ wording, qty=45, ...props }) => {
  const [ currentSamurai, setCurrentSamurai ] = useState(null);
  const [ openModal, setOpenModal ] = useState(false);

  const zeroTransfer = (num) => {
    let str = num + "";
    const count = 4 - str.length; 
    for (let i = 0; i < count; i++) {
      str = "0" + str
    }
    return str;
  }
  
  function handleOpenModalBox(e) {
    const { samurai } = e.currentTarget.dataset;
    setCurrentSamurai(samurai);
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }
  
  function renderWallItem() {
    let items = [];
    const list = ["21", "9", "29", "38", "73", "83", "89", "90", "109", "117", "129", "166", "179", "184", "223", "232", "312", "328", "351", "375", "514", "822", "892", "1114", "1380", "1397", "1550", "1590", "1628", "1654", "1899", "1910", "1981", "2109", "2410", "2961", "3228", "3267", "3517", "3862", "3863", "5142", "5143", "5870", "6865", "7312", "8236"];
    const currentQty = detectMob() ? 30 : 45;

    for (let i = 0; i < currentQty; i++) {
      items.push(
        <WallItem data-samurai={list[i]} onClick={handleOpenModalBox}>
          <Img src={`/images/samurai/${list[i]}.png`} />
          <p>#{ zeroTransfer(list[i]) }</p>
        </WallItem>
      );
    };
    
    return items;
  }

  return (
    <Root {...props}>
      <ModalBox open={openModal} onClose={handleCloseModal}>
        <Img src={`/images/samurai/${currentSamurai}.png`} />
      </ModalBox>
      <Wrapper>
        { renderWallItem() }
      </Wrapper>
    </Root>
  )
}



const Root = styled.div`
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const WallItem = styled.div`
  position: relative;
  width: calc(100% / 9);
  height: auto;
  cursor: pointer;
  ${respondTo.md} {
    width: calc(100% / 3);
    &:nth-child(10n) {
      width: 100%;
    }
  }
  img {
    position: relative;
    z-index: 0;
    transition: opacity .3s ease;
  }
  p {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    font-size: 36px;
    font-weight: 900;
    color: ${colors.white};
    text-align: center;
    transform: translateY(-50%);
    transition: opacity .3s ease;
    opacity: 0;
    z-index: 1;
  }
  &:hover {
    img {
      opacity: .25;
    }
    p {
      opacity: 1;
    }
  }
`

export default GallerySection;