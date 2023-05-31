import { useEffect } from "react";
import "./drumkit.css";

export default function Drumkit() {
  useEffect(() => {
    const keys = Array.from(document.querySelectorAll(".key"));
    let keyState = {}; // Track the state of each key
    const audioElements = Array.from(document.querySelectorAll("audio"));

    function removeTransition(e) {
      if (e.propertyName !== "transform") return;
      e.target.classList.remove("playing");
    }

    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;

      if (e.type === "keydown" && !keyState[e.keyCode]) {
        keyState[e.keyCode] = true;
        key.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
      } else if (e.type === "keyup") {
        delete keyState[e.keyCode];
        key.classList.remove("playing");
        audio.pause();
      }
    }

    function removePlayingClass() {
      keys.forEach((key) => key.classList.remove("playing"));
      keyState = {};
      audioElements.forEach((audio) => audio.pause());
    }

    keys.forEach((key) => {
      key.addEventListener("transitionend", removeTransition);
      key.addEventListener("keyup", removePlayingClass);
    });

    window.addEventListener("keydown", playSound);
    window.addEventListener("keyup", playSound);

    return () => {
      keys.forEach((key) => {
        key.removeEventListener("transitionend", removeTransition);
        key.removeEventListener("keyup", removePlayingClass);
      });
      window.removeEventListener("keydown", playSound);
      window.removeEventListener("keyup", playSound);
    };
  }, []);

  return (
    <div className="drumkit">
      <div className="keys">
        <div data-key="65" className="key" id="clap">
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </div>
        <div data-key="83" className="key" id="hihat">
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="68" className="key" id="kick">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="70" className="key" id="openhat">
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </div>
        <div data-key="71" className="key" id="boom">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="72" className="key" id="ride">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="74" className="key" id="snare">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="75" className="key" id="tom">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
        <div data-key="76" className="key" id="tink">
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </div>
      </div>

      <div class="keys">
        <div data-key="66" class="key tune" id="babyshark">
          <kbd>B</kbd>
          <span class="sound">babyshark</span>
        </div>
        <div data-key="77" class="key tune" id="monkeyshark">
          <kbd>M</kbd>
          <span class="sound">monkeyshark</span>
        </div>
        <div data-key="49" class="key tune" id="countdown">
          <kbd>1</kbd>
          <span class="sound">countdown</span>
        </div>
        <div data-key="50" class="key tune" id="gameover">
          <kbd>2</kbd>
          <span class="sound">gameover</span>
        </div>
        <div data-key="51" class="key tune" id="positive">
          <kbd>3</kbd>
          <span class="sound">positive</span>
        </div>
      </div>

      <audio data-key="65" src="/assets/sounds/percussion/clap.wav"></audio>
      <audio data-key="83" src="/assets/sounds/percussion/hihat.wav"></audio>
      <audio data-key="68" src="/assets/sounds/percussion/kick.wav"></audio>
      <audio data-key="70" src="/assets/sounds/percussion/openhat.wav"></audio>
      <audio data-key="71" src="/assets/sounds/percussion/boom.wav"></audio>
      <audio data-key="72" src="/assets/sounds/percussion/ride.wav"></audio>
      <audio data-key="74" src="/assets/sounds/percussion/snare.wav"></audio>
      <audio data-key="75" src="/assets/sounds/percussion/tom.wav"></audio>
      <audio data-key="76" src="/assets/sounds/percussion/tink.wav"></audio>

      <audio data-key="66" src="./assets/sounds/tunes/babyshark_acoustic.mp3"></audio>
      <audio data-key="77" src="./assets/sounds/tunes/monkeyshark.mp3"></audio>
      <audio data-key="49" src="./assets/sounds/tunes/happy_countdown.wav"></audio>
      <audio data-key="50" src="./assets/sounds/tunes/fun_gameover.wav"></audio>
      <audio data-key="51" src="./assets/sounds/tunes/positive_sound.wav"></audio>
    </div>
  );
}
