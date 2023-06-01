import { FaCss3, FaGithub, FaHome, FaHtml5, FaStackExchange } from "react-icons/fa";
import "../scss/button1.scss";

export default function Button1() {

  return (
    <div id="button-1" className="button-1">
      <h6>This is the Button # 1 component.</h6>

{/* BUTTON SYSTEM 1 */}

      <nav role="navigation" className="navigation">
        <ul>
          <li>
            <a href="#" className="navigationA">
              <span className="inner"></span>
              {/* <FaHome className="react-icon" /> */}
              <i className="icon-home"></i>
            </a>
          </li>
          <li>
            <a href="#" className="navigationA">
              <span className="inner"></span>
              {/* <FaHtml5 className="react-icon" /> */}
              <i className="icon-html5"></i>
            </a>
          </li>
          <li>
            <a href="#" className="navigationA">
              <span className="inner"></span>
              {/* <FaCss3 className="react-icon" /> */}
              <i className="icon-css3"></i>
            </a>
          </li>
          <li>
            <a href="#" className="navigationA">
              <span className="inner"></span>
              {/* <FaStackExchange className="react-icon" /> */}
              <i className="icon-stackexchange"></i>
            </a>
          </li>
          <li>
            <a href="#" className="navigationA">
              <span className="inner"></span>
              {/* <FaGithub className="react-icon" /> */}
              <i className="icon-github"></i>
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
}