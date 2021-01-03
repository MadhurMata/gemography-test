import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  background-color: #889fbb;
  box-shadow: 0 2px 1px 5px rgba(0, 0, 0, 0.2);
  height: 2rem;

  p {
    display: block;
  }
`;

export default function Footer() {
  return (
    <Container>
      <p>Madhur Mata - Full-stack Developer</p>
    </Container>
  );
}
