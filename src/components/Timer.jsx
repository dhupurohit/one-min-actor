import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running, time]);

  const start = () => setRunning(true);
  const reset = () => {
    setRunning(false);
    setTime(60);
  };

  return (
    <div className="mt-4 text-center">
      <p className="text-xl font-semibold">{time}s</p>

      <div className="flex justify-center gap-2 mt-2">
        <button onClick={start} className="btn-primary">
          Start
        </button>

        <button onClick={reset} className="btn-primary">
          Reset
        </button>
      </div>
    </div>
  );
}