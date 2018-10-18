import React, { Component } from 'react';

import Time from '../components/Time';
import Button from '../components/Button';
import Session from '../components/Session';
import Settings from '../components/Settings';

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
      <div className="wrapper">
        <div className="timer-box">
          <Time
            time={this.state.timeLeft}
            status={this.state.isBreak ? 'break' : 'work'}
          />
          <div className="btn-row">
            <Button title="start" />
            <Button title="reset" />
          </div>
          <p className="session-title">Sessions Today</p>
          <div className="sessions-row">
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
          </div>
        </div>
        <div className="settings-row">
            <Settings title="work" count={this.state.sessionLength / 60} />
            <Settings title="break" count={this.state.breakLength / 60} />
            <Settings title="sessions goal" count={this.state.sessionsGoal} />
        </div>
      </div>
    );
  }
}

export default TimerContainer;