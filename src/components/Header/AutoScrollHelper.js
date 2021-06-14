import React, { useEffect } from 'react';
import { parse } from 'query-string';
import { useLocation } from 'react-router-dom';
import { scrollTo } from '../../utils/scrollTo';

const AutoScrollHelper = () => {
  const location = useLocation();
  
  useEffect(() => {
    location.search && handleApplyAutoScroll();
  }, [location])

  function handleApplyAutoScroll() {
    const { to } = parse(location.search);
    const element = document.getElementById(to);
    if (element) {
      scrollTo(1, element.offsetTop);
    }
    else {
      handleApplyAutoScroll();
    }
  }
  
  return <></>;
};

export default AutoScrollHelper;
