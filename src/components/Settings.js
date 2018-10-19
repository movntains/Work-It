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
  color: #14181D;
`;

const Settings = props => {
  return (
    <SettingsWrapper>
      <SettingsButtonRow>
        <button>-</button>
        <SettingsTime>
          {props.count}
        </SettingsTime>
        <button>+</button>
      </SettingsButtonRow>
      <div>
        <SettingsTitle>
          {props.title.toUpperCase()}
        </SettingsTitle>
      </div>
    </SettingsWrapper>
  );
};

Settings.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number
};

Settings.defaultProps = {
  title: 'work',
  count: 25
};

export default Settings;