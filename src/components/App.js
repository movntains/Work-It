import React, { Component } from 'react';
import styled from 'styled-components';

import TimerContainer from '../containers/TimerContainer';

const WaveWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5%;
  background-color: #015871;
`;

const BottomWave = styled.div`
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg');
  background-repeat: repeat-x;
`;

const TopWave = styled.div`
  position: absolute;
  top: -175px;
  width: 6400px;
  height: 198px;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg');
  background-repeat: repeat-x;
  opacity: 1;
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 75px;
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
      <>
        <WaveWrapper>
          <TopWave />
          <BottomWave />
        </WaveWrapper>
        <AppWrapper>
          <TimerContainer />
        </AppWrapper>
      </>
    );
  }
}

export default App;
