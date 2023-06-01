import { useEffect } from "react";
import { FaFacebook, FaMusic, FaSoundcloud, FaYoutube } from "react-icons/fa";
import "../scss/button4.scss";

export default function Button4() {

///////// || BUTTON SYSTEM 4 USEEFFECT || /////////

  useEffect(() => {
    var bubble = function (event) {
      var button = event.target;
      if (!button.classList.contains("activated")) {
        button.classList.add("activated");
        button.addEventListener("animationend", function () {
          button.classList.remove("activated");
        });
      }
    };

    var buttons = document.querySelectorAll(".bubble");
    buttons.forEach((button) => {
      button.addEventListener("mouseup", bubble);
    });
  }, []);

  return (
    <div id="button-4" className="button-4">
      <h6>This is the Button # 4 component.</h6>

{/* BUTTON SYSTEM 4 */}

      <div className="social">
        <div>
          <h1> Press Me <i className="i">!</i></h1>
          <ul>
            <li className="bubble-button">
              <a href="#" title="Youtube" className="bubble">
                <FaYoutube />
              </a>
            </li>
            <li className="bubble-button">
              <a href="#" title="Facebook" className="bubble">
                <FaFacebook />
              </a>
            </li>
            <li className="bubble-button">
              <a href="#" title="Soundcloud" className="bubble">
                <FaSoundcloud />
              </a>
            </li>
            <li className="bubble-button">
              <a href="#" title="Music" className="bubble">
                <FaMusic />
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}