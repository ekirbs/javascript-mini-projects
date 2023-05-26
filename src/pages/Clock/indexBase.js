import { useEffect, useRef } from "react";
import "./style.css";

export default function Clock() {
  const secondHandRef = useRef(null);
  const minsHandRef = useRef(null);
  const hourHandRef = useRef(null);

  useEffect(() => {
    const secondHand = secondHandRef.current;
    const minsHand = minsHandRef.current;
    const hourHand = hourHandRef.current;

    function setDate() {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = (seconds / 60) * 360 + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const mins = now.getMinutes();
      const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    const intervalId = setInterval(setDate, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-page">
      <h6>This is the clock page.</h6>
      <div id="clock" className="clock">
        <div className="clock-face">
          <div className="hand hour-hand" ref={hourHandRef}></div>
          <div className="hand min-hand" ref={minsHandRef}></div>
          <div className="hand second-hand" ref={secondHandRef}></div>
        </div>
      </div>
    </div>
  );
}
