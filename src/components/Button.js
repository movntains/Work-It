import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button className="btn">
      {props.title.toUpperCase()}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string
};

Button.defaultProps = {
  title: 'start'
};

export default Button;