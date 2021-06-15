import React from 'react';
import styled from 'styled-components';
import HeadingSection from './HeadingSection';
import IntroSection from './IntroSection';
import NewsSection from './NewsSection';
import WallSection from './WallSection';
import CardSection from './CardSection';
import { _w } from '../../utils/wordingSystem';

const HomePage = () => {
  const wording = _w('homepage');
  
  return (
    <Root>
      <HeadingSection />
      <IntroSection wording={wording.intro} />
      <NewsSection wording={wording.news} />
      <WallSection wording={wording.wall} />
      <CardSection wording={wording.card} />
    </Root>
  )
}

const Root = styled.div``

export default HomePage;