import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { lockWindow } from '../../utils/methods';

const ModalBox = ({ open, onClose, children, ...props }) => {
  useEffect(() => {
    lockWindow(open);
  }, [open]);

  return (
    <Root open={open} {...props}>
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
  opacity: 0.5;
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

export default ModalBox;
