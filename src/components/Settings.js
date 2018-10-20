import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

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
`;

const SettingsTime = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #333;
`;

const SettingsTitle = styled.p`
  color: #14181d;
`;

const Settings = props => {
  const { count, title, dec, inc } = props;

  return (
    <SettingsWrapper>
      <SettingsButtonRow>
        <button type="button" onClick={dec}>
          -
        </button>
        <SettingsTime>{count}</SettingsTime>
        <button type="button" onClick={inc}>
          +
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
