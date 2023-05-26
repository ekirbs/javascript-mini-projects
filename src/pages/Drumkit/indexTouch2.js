import { useEffect, useState } from "react";
import "./style.css";

export default function Drumkit() {
  const [keyState, setKeyState] = useState({});

  useEffect(() => {
    function removeTransition(e) {
      if (e.propertyName !== "transform") return;
      e.target.classList.remove("playing");
    }

    function playSound(keyCode) {
      const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
      const key = document.querySelector(`div[data-key="${keyCode}"]`);
    
      if (!audio) return;
    
      if (!keyState[keyCode]) {
        setKeyState((prevState) => ({ ...prevState, [keyCode]: true }));
        key.classList.add("playing");
        audio.currentTime = 0;
    
        if (audio.readyState >= 3) {
          audio.play();
        } else {
          const playPromise = audio.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // Audio started playing successfully
              })
              .catch((error) => {
                // Handle playback error
                console.error(error);
              });
          }
        }
      } else {
        setKeyState((prevState) => ({ ...prevState, [keyCode]: false }));
        key.classList.remove("playing");
        audio.pause();
        setTimeout(() => {
          audio.currentTime = 0;
        }, 2);
      }
    }

    const handleKeyDown = (e) => {
      const keyCode = e.keyCode.toString();
      playSound(keyCode);
    };

    const handleKeyUp = (e) => {
      const keyCode = e.keyCode.toString();
      playSound(keyCode);
    };

    const handleMouseClick = (e) => {
      const keyCode = e.target.dataset.key;
      playSound(keyCode);
    };

    const handleTouchStart = (e) => {
      const keyCode = e.target.dataset.key;
      playSound(keyCode);
    };

    const handleTouchEnd = (e) => {
      const keyCode = e.target.dataset.key;
      playSound(keyCode);
    };

    const keys = Array.from(document.querySelectorAll(".key"));

    keys.forEach((key) => {
      key.addEventListener("transitionend", removeTransition);
      key.addEventListener("mousedown", handleMouseClick);
      key.addEventListener("mouseleave", handleMouseClick);
      key.addEventListener("mouseup", handleMouseClick);
      key.addEventListener("touchstart", handleTouchStart);
      key.addEventListener("touchend", handleTouchEnd);
    });

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      keys.forEach((key) => {
        key.removeEventListener("transitionend", removeTransition);
        key.removeEventListener("mousedown", handleMouseClick);
        key.removeEventListener("mouseleave", handleMouseClick);
        key.removeEventListener("mouseup", handleMouseClick);
        key.removeEventListener("touchstart", handleTouchStart);
        key.removeEventListener("touchend", handleTouchEnd);
      });

      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keyState]);

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

      <div className="keys">
        <div data-key="66" className="key tune" id="babyshark">
          <kbd>B</kbd>
          <span className="sound">babyshark</span>
        </div>
        <div data-key="77" className="key tune" id="monkeyshark">
          <kbd>M</kbd>
          <span className="sound">monkeyshark</span>
        </div>
        <div data-key="49" className="key tune" id="countdown">
          <kbd>1</kbd>
          <span className="sound">countdown</span>
        </div>
        <div data-key="50" className="key tune" id="gameover">
          <kbd>2</kbd>
          <span className="sound">gameover</span>
        </div>
        <div data-key="51" className="key tune" id="positive">
          <kbd>3</kbd>
          <span className="sound">positive</span>
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