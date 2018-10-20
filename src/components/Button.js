import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
  min-width: 150px;
  padding: 10px 20px;
  background-color: #ffffff;
  border-bottom: 4px solid #d5d5d5;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }

  &:active {
    border-bottom: 0px;
    transform: translate(0px, 3px);
    transition: all 0.1s;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 7px #f1f1f1;
  }
`;

const Button = props => {
  return <Btn>{props.title.toUpperCase()}</Btn>;
};

Button.propTypes = {
  title: PropTypes.string
};

Button.defaultProps = {
  title: 'start'
};

export default Button;
