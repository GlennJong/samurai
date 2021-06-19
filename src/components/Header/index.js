import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import AutoScrollHelper from '../AutoScrollHelper';
import LinksList from './LinksList';
import SocialsList from './SocialsList';
import { _w } from '../../utils/wordingSystem';
import { respondTo } from '../../utils/responsive';
import { lockWindow } from '../../utils/methods';
import { colors } from '../../constants/colors';

const Header = () => {
  const wording = _w('header');

  const headerRef = useRef(null);
  const fixederRef = useRef();

  const prevPageYOffset = useRef(0);
  const navbarTop = useRef(0);

  const [ open, setOpen ] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);    
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [])

  function handleWindowScroll(e) {
    const pageYOffset = Math.max(window.pageYOffset, 0);
    const delta = pageYOffset - prevPageYOffset.current;
    navbarTop.current = navbarTop.current - delta;
    navbarTop.current = Math.max(navbarTop.current, -160);

    if (delta < 0) navbarTop.current = 0;
    if (delta > 0) setOpen(false);
    fixederRef.current.style.setProperty('transition-duration', (delta < 0) ? '0.3s': '0s');
    fixederRef.current.style.setProperty('transform', `translateY(${navbarTop.current}px)`);

    prevPageYOffset.current = pageYOffset;
  }

  const handleCloseLinksMenu = () => {
    setOpen(false);
  }

  const handleToggleLinksMenu = () => {
    setOpen(!open);
  }

  useEffect(() => {
    lockWindow(open);
  }, [open])


  return (
    <Root ref={headerRef}>
      <AutoScrollHelper />
      <Fixeder ref={fixederRef}>
        <Wrapper>
          <Link className="logo" to="/?to=heading"><img src="/images/header-logo.png" alt=""/></Link>
          <MenuWrapper className="menu" open={open}>
            <LinksList data={wording.links} onLinkClick={handleCloseLinksMenu} />
            <SocialsList data={wording.socials} />
          </MenuWrapper>
          <MenuButton open={open} onClick={handleToggleLinksMenu}>
            <div></div>
            <div></div>
            <div></div>
          </MenuButton>
        </Wrapper>
      </Fixeder>
    </Root>
  )
}

const Root = styled.header`
`

const Fixeder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  box-sizing: border-box;
  background: ${colors.black};
  color: ${colors.white};
  transition: transform .3s ease;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  transition: all .3s ease ${({time}) => time}ms;
  ${respondTo.md} {
    padding: 0;
  }
  .logo {
    position: relative;
    display: block;
    width: 197px;
    z-index: 3;
    img {
      width: 100%;
      height: auto;
    }
    ${respondTo.md} {
      margin-top: 4px;
      margin-left: 10px;
      width: 190px;
    }
  }
  .menu {
    width: 66vw;
    ${respondTo.md} {
      width: 100vw;
    }
  }
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${ respondTo.md } {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    padding: 24px 40px;
    padding-top: 104px;
    width: 75vw;
    height: 100vh;
    overflow-y: auto;
    background: ${colors.black};
    z-index: 2;
    transform: translateX(100%);
    transition: all .3s ease;
    box-sizing: border-box;
    ${({open}) => open && css`transform: translateX(0%);`}
  }
`

const MenuButton = styled.button`
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
    ${({open}) => open && css`
      &:first-child { transform: translateY(9px) rotate(45deg);}
      &:nth-child(2) { opacity: 0; }
      &:last-child { transform: translateY(-9px) rotate(-45deg);}
    `}
  }
  ${ respondTo.md } {
    display: block;
  }
`

export default Header;
