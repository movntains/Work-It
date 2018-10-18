import React from 'react';
import PropTypes from 'prop-types';

const Settings = props => {
  return (
    <div className="settings">
      <div className="settings-btn-row">
        <button>-</button>
        <p className="settings-time">
          {props.count}
        </p>
        <button>+</button>
      </div>
      <div>
        <p className="settings-title">
          {props.title}
        </p>
      </div>
    </div>
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