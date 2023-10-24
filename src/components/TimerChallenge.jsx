import { useRef, useState } from "react";

let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000); // convets to milliseconds

    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {/* conditionally output a paragraph if you lost */}
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running... " : "Timer inactive"}
      </p>
    </section>
  );
}
