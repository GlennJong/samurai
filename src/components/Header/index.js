import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import AutoScrollHelper from './AutoScrollHelper';
import LinksList from './LinksList';
import SocialsList from './SocialsList';
import { MenuBurger, Close } from '../Icons';
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

  const handleOpenLinksMenu = () => {
    setOpen(true);
  }

  useEffect(() => {
    lockWindow(open);
  }, [open])


  return (
    <Root ref={headerRef}>
      <AutoScrollHelper />
      <Fixeder ref={fixederRef}>
        <Wrapper>
          <Link className="logo" to="/"><img src="/images/header-logo.png" alt=""/></Link>
          <MenuWrapper className="menu" open={open}>
            <LinksList data={wording.links} onLinkClick={handleCloseLinksMenu} />
            <SocialsList data={wording.socials} />
          </MenuWrapper>
          <CloseMenuButton show={open} onClick={handleCloseLinksMenu}><Close className="icon" /></CloseMenuButton>
          <MenuButton onClick={handleOpenLinksMenu}><MenuBurger /></MenuButton>
        </Wrapper>
        { open && <Mask onClick={handleCloseLinksMenu} /> }
      </Fixeder>
    </Root>
  )
}

const Root = styled.header`
  height: 72px;
  background: ${colors.black};
  ${respondTo.md} {
    height: 48px;
  }
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
    display: block;
    width: 197px;
    img {
      width: 100%;
      height: auto;
    }
    ${respondTo.md} {
      margin-left: 24px;
      height: 20px;
    }
  }
  .menu {
    width: calc(100% - 340px);
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


const CloseMenuButton = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 72px;
  height: 48px;
  border: 0;
  background: ${colors.red};
  color: ${colors.black};
  z-index: 2;

  ${ respondTo.md } {
    display: block;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
    ${({show}) => show && css`
      opacity: 1;
      visibility: visible;
    `}
  }
  > .icon {
    width: 20px;
    height: auto;
  }
`

const MenuButton = styled.button`
  display: none;
  border: 0;
  width: 72px;
  height: 48px;
  background: ${colors.red};
  color: ${colors.black};
  ${ respondTo.md } {
    display: block;
  }
`

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`

export default Header;
