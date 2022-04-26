import React from "react";
import { useCountdown } from "/home/apesapeingapes/witsports/front-end/src/hooks/useCountdown.js";

const HeaderCountdown = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const ExpiredNotice = () => {
    return (
      <div>
        <p>Voting has begun.</p>
      </div>
    );
  };

  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div
        style={{
          fontFamily: "open sans",
          color: "white",
          fontSize: "14px",
          letterSpacing: "2.8px",
        }}
      >
        <p>
          VOTING BEGINS IN{" "}
          <b style={{ fontFamily: "open sans" }} id="countdown-b">
            {days}D {hours}:{minutes}:{seconds}
          </b>
        </p>
      </div>
    );
  };

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default HeaderCountdown;
