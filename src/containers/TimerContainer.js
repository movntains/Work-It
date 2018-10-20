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
  color: #ffffff;
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

  incSession = () => {
    this.setState((prevState, props) => ({
      sessionLength: prevState.sessionLength + 60,
      timeLeft: prevState.timeLeft + 60
    }));
  };

  decSession = () => {
    this.setState((prevState, props) => ({
      sessionLength: prevState.sessionLength - 60,
      timeLeft: prevState.timeLeft - 60
    }));
  };

  render() {
    const {
      timeLeft,
      isBreak,
      sessionsGoal,
      sessionsCompleted,
      sessionLength,
      breakLength
    } = this.state;

    return (
      <Wrapper>
        <TimerBox>
          <Time time={timeLeft} status={isBreak ? 'break' : 'work'} />
          <ButtonsRow>
            <Button title="start" />
            <Button title="reset" />
          </ButtonsRow>
          <SessionTitle>Sessions Today</SessionTitle>
          <SessionsRow>
            {Array.from({ length: sessionsGoal }, (v, i) => i).map(
              (session, i) => (
                <Session key={i} completed={i + 1 <= sessionsCompleted} />
              )
            )}
          </SessionsRow>
        </TimerBox>
        <SettingsRow>
          <Settings
            title="work"
            count={sessionLength / 60}
            inc={this.incSession}
            dec={this.decSession}
          />
          <Settings
            title="break"
            count={breakLength / 60}
            inc={this.incSession}
            dec={this.decSession}
          />
          <Settings
            title="sessions goal"
            count={sessionsGoal}
            inc={this.incSession}
            dec={this.decSession}
          />
        </SettingsRow>
      </Wrapper>
    );
  }
}

export default TimerContainer;
