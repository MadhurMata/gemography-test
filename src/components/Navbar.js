import React from 'react'
import styled from 'styled-components';
import SearchBar from './SearchBar';

const NavbarStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  text-align: center;
  width: 100vw;
`;

export default function Navbar() {
  return (
    <NavbarStyle>
      <SearchBar />
    </NavbarStyle>
  )
}
