import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { lockWindow } from '../../utils/methods';
import { respondTo } from '../../utils/responsive';

const ModalBox = ({ open, onClose, children, ...props }) => {
  useEffect(() => {
    lockWindow(open);
  }, [open]);

  return (
    <Root open={open} {...props}>
      <CloseButton onClick={onClose}>
        <div></div>
        <div></div>
        <div></div>
      </CloseButton>
      <Mask onClick={onClose} />
      <Box open={open} >{ children }</Box>
    </Root>
  )
}

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: -1;
  transition: .3s ease;
  ${({ open }) => open && css`
    z-index: 5;
    opacity: 1;
  `};
`

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${colors.black};
  opacity: 0.75;
  z-index: 0;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  border: 0;
  width: 72px;
  height: 48px;
  background: transparent;
  z-index: 2;
  > div {
    border-radius: 12px;
    margin: auto;
    width: 27px;
    height: 5px;
    background: ${colors.white};
    transition: all .3s ease;
    & + div {
      margin-top: 4px;
    }
    &:first-child { transform: translateY(9px) rotate(45deg);}
    &:nth-child(2) { opacity: 0;}
    &:last-child { transform: translateY(-9px) rotate(-45deg);}
  }
  ${ respondTo.md } {
    display: block;
  }
`

export default ModalBox;
