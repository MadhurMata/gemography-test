import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../styles/styles';

const ChipStyle = styled.div`
  padding: 0 1rem;
  margin-right: 1rem;
  border: 2px solid ${(props) => props.color};

  @media ${device.mobile} {
    padding: 2px;
    margin-right: 3px;
    min-width: fit-content;
    text-align: center;
    p {
      inline-size: max-content;
      font-size: 0.8rem;
    }
  }
`;

export default function Chip(props) {
  const { color, quantity, text } = props;
  return (
    <ChipStyle color={color}>
      <p>{text + quantity}</p>
    </ChipStyle>
  );
}

Chip.propTypes = {
  color: PropTypes.string,
  quantity: PropTypes.string,
  text: PropTypes.string
};
