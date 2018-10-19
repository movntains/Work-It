import React, { Component } from 'react';
import styled from 'styled-components';

import Time from '../components/Time';
import Button from '../components/Button';
import Session from '../components/Session';
import Settings from '../components/Settings';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimerBox = styled.div`
  box-sizing: border-box;
  min-height: 100px;
  width: 500px;
  padding: 30px;
  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.35);
  border-radius: 4px;
`;

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const SessionTitle = styled.p`
  color: #FFFFFF;
  opacity: 0.5;
`;

const SessionsRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SettingsRow = styled.div`
  display: flex;
  width: 500px;
  margin-top: 20px;
`;

class TimerContainer extends Component {
  // Times are in seconds
  state = {
    isRunning: false,
    isPause: false,
    timeLeft: 1500,
    isBreak: false,
    sessionLength: 1500,
    breakLength: 300,
    sessionsGoal: 10,
    sessionsCompleted: 0
  };

  render() {
    return (
      <Wrapper>
        <TimerBox>
          <Time
            time={this.state.timeLeft}
            status={this.state.isBreak ? 'break' : 'work'}
          />
          <ButtonsRow>
            <Button title="start" />
            <Button title="reset" />
          </ButtonsRow>
          <SessionTitle>Sessions Today</SessionTitle>
          <SessionsRow>
            {
              Array.from({ length: this.state.sessionsGoal }, (v, i) => i)
                .map((session, i) => {
                  return (
                    <Session
                      key={i}
                      completed={i + 1 <= this.state.sessionsCompleted}
                    />
                  );
                })
            }
          </SessionsRow>
        </TimerBox>
        <SettingsRow>
            <Settings title="work" count={this.state.sessionLength / 60} />
            <Settings title="break" count={this.state.breakLength / 60} />
            <Settings title="sessions goal" count={this.state.sessionsGoal} />
        </SettingsRow>
      </Wrapper>
    );
  }
}

export default TimerContainer;