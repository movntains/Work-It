import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

const SessionDiv = styled.div`
  &.session {
    height: 15px;
    width: 15px;
    border: 2px solid #fff;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0);

    &.completed {
      background-color: rgba(255, 255, 255, 1);
    }
  }
`;

const Session = props => {
  const { completed } = props;
  const sessionClass = classnames('session', { completed });

  return <SessionDiv className={sessionClass} />;
};

Session.propTypes = {
  completed: PropTypes.bool
};

export default Session;
