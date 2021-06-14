import React from 'react';
import styled from 'styled-components';

const Img = ({ src='', alt='', ...props}) => {
  return (
    <Root {...props}>
      <img src={src} alt={alt} />
    </Root>
  )
}

const Root = styled.div`
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export default Img;