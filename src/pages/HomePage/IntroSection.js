import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Img from '../../components/Img';

const IntroSection = ({ wording, ...props }) => {
  return (
    <Root {...props}>
      <Heading>
        <DialogScreen>
          <DialogItem>
            <p className="title">{ wording.dialog1.title }</p>
            <p className="content">{ wording.dialog1.content }</p>
          </DialogItem>
          <DialogItem>
            <Icon className="icon" src="/images/homepage-intro-icon.png" />
            <p className="content">{ wording.dialog2 }</p>
          </DialogItem>
          <DialogItem>
            <Icon className="icon" src="/images/homepage-intro-icon.png" />
            <p className="content">{ wording.dialog3 }</p>
          </DialogItem>
        </DialogScreen>
      </Heading>
      <MaskScreen>
        <Cover src={wording.cover} />
        <BackContent>
          { wording.samurai.map((item, i) =>
            <BackItem key={i} src={item} />
          ) }
        </BackContent>

      </MaskScreen>
    </Root>
  )
}

const Root = styled.div`
`
const Heading = styled.div`
  padding-top: 160px;
  padding-bottom: 200px;
  background: ${colors.black};
`

const Icon = styled(Img)`
  width: 90px;
  text-align: center;
`

const DialogScreen = styled.div`
  
`

const DialogItem = styled.div`
  margin: auto;
  width: 800px;
  max-width: 80%;
  color: ${colors.white};
  text-align: center;
  .icon {
    display: inline-block;
    margin-bottom: 34px;
  }
  .title {
    margin-bottom: 5px;
    font-size: 90px;
    font-weight: 600;
  }
  .content {
    font-size: 36px;
  }
`
const MaskScreen = styled.div`
  position: relative;
  overflow-y: auto;
`
const Cover = styled(Img)`
`
const BackContent = styled.div`
  position: absolute;
  top: 10%;
  right: 8%;
  width: 40%;
  z-index: -1;
`
const BackItem = styled(Img)`
`

export default IntroSection;