import { useEffect } from "react";
import "./style.css";

export default function Drumkit() {

  useEffect(() => {
    function removeTransition(e) {
      if (e.propertyName !== "transform") return;
      e.target.classList.remove("playing");
    }

    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;

      key.classList.add("playing");
      audio.currentTime = 0;
      audio.play();
    }

    const keys = Array.from(document.querySelectorAll(".key"));
    keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
    window.addEventListener("keydown", playSound);

    return () => {
      keys.forEach((key) => key.removeEventListener("transitionend", removeTransition));
      window.removeEventListener("keydown", playSound);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="drumkit">
      <div class="keys">
        <div data-key="65" class="key" id="clap">
          <kbd>A</kbd>
          <span class="sound">clap</span>
        </div>
        <div data-key="83" class="key" id="hihat">
          <kbd>S</kbd>
          <span class="sound">hihat</span>
        </div>
        <div data-key="68" class="key" id="kick">
          <kbd>D</kbd>
          <span class="sound">kick</span>
        </div>
        <div data-key="70" class="key" id="openhat">
          <kbd>F</kbd>
          <span class="sound">openhat</span>
        </div>
        <div data-key="71" class="key" id="boom">
          <kbd>G</kbd>
          <span class="sound">boom</span>
        </div>
        <div data-key="72" class="key" id="ride">
          <kbd>H</kbd>
          <span class="sound">ride</span>
        </div>
        <div data-key="74" class="key" id="snare">
          <kbd>J</kbd>
          <span class="sound">snare</span>
        </div>
        <div data-key="75" class="key" id="tom">
          <kbd>K</kbd>
          <span class="sound">tom</span>
        </div>
        <div data-key="76" class="key" id="tink">
          <kbd>L</kbd>
          <span class="sound">tink</span>
        </div>
      </div>

      <audio data-key="65" src="./assets/sounds/percussion/clap.wav"></audio>
      <audio data-key="83" src="./assets/sounds/percussion/hihat.wav"></audio>
      <audio data-key="68" src="./assets/sounds/percussion/kick.wav"></audio>
      <audio data-key="70" src="./assets/sounds/percussion/openhat.wav"></audio>
      <audio data-key="71" src="./assets/sounds/percussion/boom.wav"></audio>
      <audio data-key="72" src="./assets/sounds/percussion/ride.wav"></audio>
      <audio data-key="74" src="./assets/sounds/percussion/snare.wav"></audio>
      <audio data-key="75" src="./assets/sounds/percussion/tom.wav"></audio>
      <audio data-key="76" src="./assets/sounds/percussion/tink.wav"></audio>
    </div>
  );
}
