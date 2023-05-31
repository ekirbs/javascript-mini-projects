import {RobotConfused} from "../../assets/images"
import "./notfound.css";

export default function NotFound() {

  return (
    <div id="not-found" className="not-found">
      <h6>This is the 404 page.</h6>
      <img src={RobotConfused} className="robot-confused" alt="Confused Robot" />
    </div>
  );
}