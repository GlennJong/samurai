import React from 'react';
import styled from 'styled-components';
import Img from '../../components/Img';
import { colors } from '../../constants/colors';
import { nl2br } from '../../utils/wordingSystem';
import { Twitter, Medium, Discord } from '../../components/Icons';

const AboutSection = ({ wording, ...props }) => {
  return (
    <Root {...props}>
      <Container>
        <Heading>
          <Img className="icon" src="/images/icon-ecoin.png" />
          <Img className="heading" src="/images/homepage-about-heading.png" />
          <Img className="icon" src="/images/icon-ecoin.png" />
        </Heading>
        <Title>{ wording.title }</Title>
        <Line src="/images/icon-line.svg" />
        <Subtitle>{ wording.subtitle }</Subtitle>
        <Article>
          <div className="title">{ wording.article.title }</div>
          <div className="content">{ nl2br(wording.article.content) }</div>
        </Article>
        <Contact>
          <Img className="samurai" src="/images/homepage-about-samurai-1.png" />
          <Img className="samurai" src="/images/homepage-about-samurai-2.png" />
          <Img className="samurai" src="/images/homepage-about-samurai-3.png" />
          <div className="link">
            <p>MEET THE TEAM</p>
            <a href=""><Medium /></a>
            <a href=""><Discord /></a>
            <a href=""><Twitter /></a>
          </div>
        </Contact>
      </Container>
    </Root>
  )
}

const Root = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  background: ${colors.black};
  color: ${colors.white};
`

const Container = styled.div`
  margin: 0 auto;
  width: 800px;
`

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  .icon {
    width: 85px;
  }
  .heading {
    width: 600px;
  }
`

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
`
const Line = styled(Img)`
  margin: 56px auto;
  width: 580px;
`
const Subtitle = styled.div`
  margin-bottom: 280px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`

const Article = styled.div`
  margin-bottom: 120px;
  font-weight: 600;
  .title {
    margin-bottom: 60px;
    font-size: 36px;
  }
  .content {
    font-size: 18px;
  }

`

const Contact = styled.div`
  text-align: center;
  .samurai {
    display: inline-block;
    margin: 0 15px;
    margin-bottom: 70px;
    width: 180px;
  }
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      margin-right: 40px;
      font-size: 30px;
      font-weight: 600;
    }
    a {
      display: inline-block;
      margin-right: 24px;
    }
  }
`

export default AboutSection;