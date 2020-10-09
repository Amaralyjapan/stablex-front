import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

import AccountButton from './components/AccountButton'
import Nav from './components/Nav'
import ThemeSwitch from './components/ThemeSwitch'

interface TopBarProps {
    isDark: boolean
    toogleTheme: (isDark: boolean) => void
    onPresentMobileMenu: () => void
}

const TopBar: React.FC<TopBarProps> = ({ isDark, toogleTheme, onPresentMobileMenu}) => {
    return (
        <StyledTopBar>
            <Container size="lg">
                <StyledTopBarInner>
                    <StyledLogoWrapper>
                      <Link to="/">
                        StableX Swap
                        </Link>
                    </StyledLogoWrapper>
                    <Nav />
                    <ThemeSwitch isDark={isDark} toogleTheme={toogleTheme} />
                    <StyledAccountButtonWrapper>
                        <AccountButton/>
                    </StyledAccountButtonWrapper>
                    <StyledAccountMenuWrapper>
                        <Menu onClick={onPresentMobileMenu}>Menu</Menu>
                    </StyledAccountMenuWrapper>
                </StyledTopBarInner>
            </Container>
        </StyledTopBar>
    )
}

const Menu = styled.div`
  margin: 0 auto;
  width: 82px;
  text-align: center;
  color: white;
  font-size: 17px;
  padding: 3px 3px 3px 3px;
  font-weight: 700;
  background: #47d3db;
  border-radius: 20px;
  display: nones;
  display: none;
  @media (max-width: 850px) {
    display: block;
  }
`

const StyledLogoWrapper = styled.div`
  width: 260px;
  font-family: "Kaushan Script", sans-serif;
  @media (max-width: 420px) {
    width: auto;
  }
  a {
    text-decoration: none;
    color: #ff982b;
    font-size: 26px;
    font-weight: 900;
  }
`

const StyledTopBar = styled.div``

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: ${(props) => props.theme.topBarSize}px;
  justify-content: space-between;
  max-width: ${(props) => props.theme.siteWidth}px;
  width: 100%;
`
const StyledNavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 400px) {
    display: none;
  }
`

const StyledAccountButtonWrapper = styled.div`
  @media (max-width: 850px) {
    display: none;
  }
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 156px;
  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }
`
const StyledAccountMenuWrapper = styled.div`
  @media (mim-width: 850px) {
    display: none;
  }
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 0;
  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }
`

const StyledMenuButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  display: none;
  @media (max-width: 400px) {
    align-items: center;
    display: flex;
    height: 44px;
    justify-content: center;
    width: 44px;
  }
`

export default TopBar
