import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Clock = styled.h1`
  margin: 0px;
  font-size: 80px;
  font-weight: 100;
  line-height: 80px;
  color: #fff;
`;

const Status = styled.p`
  margin: 5px 0 20px 0;
  color: #fff;
  opacity: 0.5;
`;

const renderTime = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  const newTime = `${minutes.toString()}:${
    seconds < 10 ? '0' + seconds : seconds
  }`;

  return newTime;
};

const Time = props => {
  return (
    <div>
      <Clock>{renderTime(props.time)}</Clock>
      <Status>{props.status.toUpperCase()}</Status>
    </div>
  );
};

Time.propTypes = {
  time: PropTypes.number,
  status: PropTypes.string
};

Time.defaultProps = {
  time: 1500,
  status: 'work'
};

export default Time;
