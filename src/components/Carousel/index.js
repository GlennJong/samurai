import React, { useRef } from 'react';
import Slick from 'react-slick';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

// import { Text } from '../TextStyle';
// import { NextButton, PrevButton } from '../DirectionButton';
import { respondTo, respondFrom } from '../../utils/responsive';

const Carousel = ({ className='', children }) => {
  const carouselRef = useRef(null);
  const slickSettings = {
    infinite: false,
    arrows: false,
    dots: true,
    // centerMode: true,
    // variableWidth: true,
    // centerPadding: '30px',
    autoplay: false,
    // afterChange: current => setCurrentIndex(current+1),
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: "unslick"
    //   }
    // ]
  };

  function handleClickArrowButton(e) {
    if (carouselRef.current) {
      const { direction } = e.currentTarget.dataset;
      if (direction === 'prev') carouselRef.current.slickPrev();
      if (direction === 'next') carouselRef.current.slickNext();
    }
  }


  return (
    <Root>
      <NavContainer>
        <button data-direction="prev" onClick={handleClickArrowButton}/>
        <button data-direction="next" onClick={handleClickArrowButton}/>
      </NavContainer>
      <CarouselBody>
        <Slick className={className} ref={carouselRef} {...slickSettings}>
          { children.map((child, i) => <div key={i}>{ child }</div>) }
        </Slick>
      </CarouselBody>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  .slick-dots {
    background: ${colors.black};
    ${'' /* position: absolute; */}
    ${'' /* bottom: 0; */}
    ${'' /* left: 50%; */}
    ${'' /* transform: translateX(-50%); */}
    button {
      background: ${colors.white};
    }
  }
`

const CarouselBody = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`

const NavContainer = styled.div`
  > button {
    position: absolute;
    top: 0;
    width: 20%;
    height: 100%;
    border: 0;
    background: transparent;
    z-index: 2;
    &:first-child {
      left: 0;
    }
    &:last-child {
      right: 0;
    }
  }
`
export default Carousel;
