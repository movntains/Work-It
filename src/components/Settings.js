import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;

  p {
    margin: 0px;
  }
`;

const SettingsButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;

  button {
    background: none;
    border: none;
    cursor: pointer;

    svg {
      fill: #39393c;
    }

    &:focus {
      outline: 0;
    }
  }
`;

const SettingsTime = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #39393c;
  opacity: 0.85;
`;

const SettingsTitle = styled.p`
  color: #39393c;
`;

const Settings = props => {
  const { count, title, dec, inc } = props;

  return (
    <SettingsWrapper>
      <SettingsButtonRow>
        <button type="button" onClick={dec}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="20"
            height="20"
          >
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm5-9v2H5V9h10z" />
          </svg>
        </button>
        <SettingsTime>{count}</SettingsTime>
        <button type="button" onClick={inc}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="20"
            height="20"
          >
            <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
          </svg>
        </button>
      </SettingsButtonRow>
      <div>
        <SettingsTitle>{title.toUpperCase()}</SettingsTitle>
      </div>
    </SettingsWrapper>
  );
};

Settings.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  dec: PropTypes.func,
  inc: PropTypes.func
};

Settings.defaultProps = {
  title: 'work',
  count: 25
};

export default Settings;
