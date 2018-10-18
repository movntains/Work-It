import React, { Component } from 'react';

import TimerContainer from '../containers/TimerContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Work It || Pomodoro Timer</h2>
        <TimerContainer />
      </div>
    );
  }
}

export default App;