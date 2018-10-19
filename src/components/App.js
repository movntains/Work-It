import React, { Component } from 'react';
import styled from 'styled-components';

import TimerContainer from '../containers/TimerContainer';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 75px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  text-align: center;

  h2 {
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    transform: skew(-8deg);
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <h2>Work It || Pomodoro Timer</h2>
        <TimerContainer />
      </AppWrapper>
    );
  }
}

export default App;