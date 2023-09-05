import { FC } from "react";
import Countdown from "./countdown";

export interface TimerProps {
  label: string;
  days: string;
  minutes: string;
  hours: string;
  seconds: string;
}

export const Timer: FC<TimerProps> = ({
  label,
  days,
  minutes,
  hours,
  seconds,
}) => {
  return (
    <>
      <h2>{label}</h2>
      <Countdown
        daysLabel={days}
        minutesLabel={minutes}
        hoursLabel={hours}
        secondsLabel={seconds}
      />
    </>
  );
};

export default Timer;
