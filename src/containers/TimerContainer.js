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
    isPaused: false,
    timeLeft: 1500,
    isBreak: false,
    sessionLength: 1500,
    breakLength: 300,
    sessionsGoal: 10,
    sessionsCompleted: 0
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  incSession = () => {
    this.setState((prevState, props) => ({
      sessionLength: prevState.sessionLength + 60,
      timeLeft: prevState.timeLeft + 60
    }));
  };

  decSession = () => {
    this.setState((prevState, props) => {
      if (prevState.sessionLength > 60) {
        return {
          sessionLength: prevState.sessionLength - 60,
          timeLeft: prevState.timeLeft - 60
        };
      }

      return { sessionLength: 60, timeLeft: 60 };
    });
  };

  incBreak = () => {
    this.setState((prevState, props) => ({
      breakLength: prevState.breakLength + 60
    }));
  };

  decBreak = () => {
    this.setState((prevState, props) => {
      if (prevState.breakLength >= 60) {
        return { breakLength: prevState.breakLength - 60 };
      }

      return { breakLength: 60 };
    });
  };

  incGoal = () => {
    this.setState((prevState, props) => ({
      sessionsGoal: prevState.sessionsGoal + 1
    }));
  };

  decGoal = () => {
    this.setState((prevState, props) => {
      if (prevState.sessionsGoal > 0) {
        return { sessionsGoal: prevState.sessionsGoal - 1 };
      }

      return { sessionsGoal: 1 };
    });
  };

  startTimer = () => {
    this.setState({
      isRunning: true,
      isPaused: false
    });

    // Clear the interval to prevent duplicated intervals
    clearInterval(this.interval);

    // Create a new 1-second interval
    this.interval = setInterval(() => {
      this.setState(
        (prevState, props) => ({ timeLeft: prevState.timeLeft - 1 }),
        () => {
          const { timeLeft, isBreak } = this.state;

          if (timeLeft < 1) {
            if (isBreak) {
              this.setState((prevState, props) => ({
                isBreak: false,
                timeLeft: prevState.sessionLength
              }));

              this.startTimer();
            } else {
              this.setState((prevState, props) => ({
                isBreak: true,
                timeLeft: prevState.breakLength,
                sessionsCompleted: prevState.sessionsCompleted + 1
              }));
            }
          }
        }
      );
    }, 1000);
  };

  pauseTimer = () => {
    clearInterval(this.interval);

    this.setState({
      isRunning: false,
      isPaused: true
    });
  };

  resetTimer = () => {
    clearInterval(this.interval);

    this.setState((prevState, props) => ({
      isRunning: false,
      isPaused: false,
      isBreak: false,
      timeLeft: prevState.sessionLength
    }));
  };

  render() {
    const {
      timeLeft,
      isBreak,
      isRunning,
      isPaused,
      sessionsGoal,
      sessionsCompleted,
      sessionLength,
      breakLength
    } = this.state;

    const time = isRunning || isPaused ? timeLeft : sessionLength;

    return (
      <Wrapper>
        <TimerBox>
          <Time time={time} status={isBreak ? 'break' : 'work'} />
          <ButtonsRow>
            <Button
              title={isRunning ? 'pause' : 'start'}
              handleClick={isRunning ? this.pauseTimer : this.startTimer}
            />
            <Button title="reset" handleClick={this.resetTimer} />
          </ButtonsRow>
          <SessionTitle>Sessions Today</SessionTitle>
          <SessionsRow>
            {Array.from(
              { length: sessionsGoal > 0 ? sessionsGoal : 1 },
              (v, i) => i
            ).map((session, i) => (
              <Session key={i} completed={i + 1 <= sessionsCompleted} />
            ))}
          </SessionsRow>
        </TimerBox>
        <SettingsRow>
          <Settings
            title="work"
            count={sessionLength / 60 >= 1 ? sessionLength / 60 : 60 / 60}
            inc={this.incSession}
            dec={this.decSession}
          />
          <Settings
            title="break"
            count={breakLength / 60 >= 1 ? breakLength / 60 : 60 / 60}
            inc={this.incBreak}
            dec={this.decBreak}
          />
          <Settings
            title="sessions goal"
            count={sessionsGoal > 0 ? sessionsGoal : 1}
            inc={this.incGoal}
            dec={this.decGoal}
          />
        </SettingsRow>
      </Wrapper>
    );
  }
}

export default TimerContainer;
