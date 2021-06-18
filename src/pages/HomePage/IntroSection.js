import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import Img from '../../components/Img';
import StickySection from '../../components/StickySection';
import { respondTo } from '../../utils/responsive';

const IntroSection = ({ wording, ...props }) => {
  const backSamuraiRef = useRef(null);
  const [ dialogStep, setDialogStep ] = useState(1);
  const [ backSamurai, setBackSamurai ] = useState(1);

  function handleTriggerDialog(value) {
    if (value >= 0 && value < 800) {
      setDialogStep(1);
    }
    else if (value >= 800 && value < 1600){
      setDialogStep(2);
    }
    else if (value >= 1600) {
      setDialogStep(3);
    }
  }

  function handleTriggerMask(value) {
    if (value >= 0 && value < 400) {
      setBackSamurai(1);
    }
    else if (value >= 400) {
      setBackSamurai(2);
    }
  }

  return (
    <Root {...props}>
      <DialogScreen offsetY={0} onActive={handleTriggerDialog} limit={1800}>
        <DialogWrapper>
          <DialogItem show={dialogStep === 1}>
            <p className="title">{ wording.dialog1.title }</p>
            <p className="content">{ wording.dialog1.content }</p>
          </DialogItem>
          <Icon turn={dialogStep === 3} show={dialogStep === 2 || dialogStep === 3} className="icon" src="/images/homepage-intro-icon.png" />
          <DialogItem show={dialogStep === 2}>
            <p className="content">{ wording.dialog2 }</p>
          </DialogItem>
          <DialogItem show={dialogStep === 3}>
            <p className="content">{ wording.dialog3 }</p>
          </DialogItem>
        </DialogWrapper>
      </DialogScreen>
      <br />
      <MaskScreen offsetY={0} onActive={handleTriggerMask} limit={800} enableOnMobile={true}>
        <Cover src={wording.cover} />
        <BackSamuraiContent ref={backSamuraiRef} index={backSamurai-1}>
          { wording.samurai.map((item, i) =>
            <BackItem key={i} src={item} />
          ) }
        </BackSamuraiContent>
      </MaskScreen>
    </Root>
  )
}

const Root = styled.div`
  background: ${colors.black};
  overflow: hidden;
`
const DialogScreen = styled(StickySection)`
  position: relative;
  padding-top: 160px;
  padding-bottom: 200px;
  ${respondTo.md} {
    padding-top: 100px;
    padding-bottom: 120px;
  }
`

const Icon = styled(Img)`
  position: absolute;
  top: 45px;
  left: calc(50% - 45px);
  width: 90px;
  text-align: center;
  ${({ turn }) => turn && css`
    transform: rotate(180deg);
  `}
  opacity: 0;
  transition: all .6s ease;
  ${({ show }) => show && css`
    top: 0;
    opacity: 1;
  `};
  ${respondTo.md} {
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    margin-bottom: 36px;
    width: 46px;
    opacity: 1;
  }
`

const DialogWrapper = styled.div`
  position: relative;
  margin: auto;
  width: 800px;
  height: 250px;
  max-width: 100%;
  ${respondTo.md} {
    padding: 0 36px;
    box-sizing: border-box;
    height: auto;
  }
`

const DialogItem = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: ${colors.white};
  text-align: center;
  opacity: 0;
  transform: translateY(33%);
  transition: all .6s ease;
  ${({ show }) => show && css`
    opacity: 1;
    transform: translateY(0);
  `};
  ${respondTo.md} {
    position: relative;
    opacity: 1;
    transform: translateY(0);
    margin-bottom: 36px;
  }
  .title {
    margin-bottom: 5px;
    font-size: 90px;
    font-weight: 600;
    ${respondTo.md} {
      margin-bottom: 14px;
      font-size: 52px;
    }
  }
  .content {
    font-size: 36px;
    ${respondTo.md} {
      font-size: 18px;
    }
  }
`
const MaskScreen = styled(StickySection)`
  position: relative;
  overflow-y: hidden;
  z-index: 0;
  ${respondTo.md} {
    margin-left: -18%;
    margin-right: -18%;
  }
`
const Cover = styled(Img)`
`
const BackSamuraiContent = styled.div`
  position: absolute;
  top: 0%;
  right: 8%;
  width: 40%;
  z-index: -1;
  transition: transform 1s ease;
  ${({ index }) => css`
    transform: translateY(-${50 * index}%);
  `}
`
const BackItem = styled(Img)`
`

export default IntroSection;