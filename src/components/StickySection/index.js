import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import { enableScroll, disableScroll } from '../../utils/lockScroll';
import { scrollTo } from '../../utils/scrollTo';
import { detectMob } from '../../utils/methods';

const StickeySection = ({ wording, offsetY=0, onActive, limit=1800, children, enableOnMobile=false, ...props }) => {
  const rootRef = useRef(null);
  const currentScrollDistanceRef = useRef(null);
  const [ active, setActive ] = useState(false);

  useIntersectionObserver(rootRef, handleActiveAnimation, {
    root: null,
    rootMargin: `${Math.max(offsetY, 0)}px 0% -${offsetY}px 0%`,
    threshold: [0.5]
  });

  function handleActiveAnimation(e) {
    // console.log(enableOnMobile)
    if ((e[0].isIntersecting && !detectMob()) || enableOnMobile) {
    // if (e[0].isIntersecting) {
      // scrollTo(.6, rootRef.current.offsetTop - Math.max(offsetY, 0));
      setActive(true);
    }
  }

  useEffect(() => {
    if (active) {
      window.addEventListener('wheel', handleWatchScroll, { passive: false })
      disableScroll();
    }
    else {
      window.removeEventListener('wheel', handleWatchScroll)
      enableScroll();
    };

    return () => window.removeEventListener('wheel', handleWatchScroll);
  }, [active]);

  function handleWatchScroll(e) {
    console.log(e)
    
    currentScrollDistanceRef.current += e.deltaY;
    onActive(currentScrollDistanceRef.current);
    
    if (currentScrollDistanceRef.current > limit) {
      currentScrollDistanceRef.current = limit;
      setActive(false);
    }
    else if (currentScrollDistanceRef.current < 0) {
      currentScrollDistanceRef.current = 0;
      setActive(false);
    }
  }

  return (
    <Root ref={rootRef} {...props}>
      { children }
    </Root>
  )
}

const Root = styled.div`
`

export default StickeySection;