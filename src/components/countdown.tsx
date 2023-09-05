import { useState, useEffect, FC } from "react";

export interface CountdownProps {
  daysLabel: string;
  minutesLabel: string;
  hoursLabel: string;
  secondsLabel: string;
}

const Countdown: FC<CountdownProps> = ({
  daysLabel,
  minutesLabel,
  hoursLabel,
  secondsLabel,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const targetDate = new Date("September 23, 2023 18:00:00 GMT-0500");

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft(distance);

      if (distance < 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <>
      <span className="timerNumbers">
        {days} {daysLabel}
      </span>
      <span className="timerNumbers">
        {hours} {hoursLabel}
      </span>
      <span className="timerNumbers">
        {minutes} {minutesLabel}
      </span>
      <span className="timerNumbers">
        {seconds} {secondsLabel}
      </span>
    </>
  );
};

export default Countdown;
