import React from 'react';
import TimerCountdown from 'react-native-timer-countdown';

const Timer = () => (
    <TimerCountdown
      initialSecondsRemaining={1000 * 60}
      onTick={secondsRemaining => console.log("tick", secondsRemaining)}
      onTimeElapsed={() => console.log("complete")}
      allowFontScaling={true}
      style={{ fontSize: 30,color:'red' }}
    />
);
export default Timer;