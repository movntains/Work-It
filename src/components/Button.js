import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
  padding: 15px 10px;
  background: transparent;
  border: solid 3px #39393c;
  border-radius: 100%;

  svg {
    fill: #39393c;
  }

  .play {
    padding-left: 10px;
  }

  .reset,
  .pause {
    padding: 0 5px;
  }

  .reset {
    padding-left: 7px;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 7px #f1f1f1;
  }
`;

const renderTitle = title => {
  if (title === 'start') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="50"
        width="50"
        viewBox="0 0 20 20"
        className="play"
      >
        <path d="M4 4l12 6-12 6z" />
      </svg>
    );
  }

  if (title === 'reset') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="50"
        width="50"
        viewBox="0 0 20 20"
        className="reset"
      >
        <path d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z" />
      </svg>
    );
  }

  if (title === 'pause') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="50"
        width="50"
        viewBox="0 0 20 20"
        className="pause"
      >
        <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
      </svg>
    );
  }
};

const Button = props => {
  const { title, handleClick } = props;

  return <Btn onClick={handleClick}>{renderTitle(title)}</Btn>;
};

Button.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func
};

Button.defaultProps = {
  title: 'start'
};

export default Button;
