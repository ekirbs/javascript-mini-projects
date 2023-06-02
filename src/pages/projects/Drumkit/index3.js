import { useEffect } from "react";
import "./style.css";

export default function Drumkit() {
  useEffect(() => {
    const keys = Array.from(document.querySelectorAll(".key"));
    const audioElements = Array.from(document.querySelectorAll("audio"));

    // let activeKeys = new Set();
    let isPlaying = false;

    function removeTransition(e) {
      if (e.propertyName !== "transform") return;
      e.target.classList.remove("playing");
    }
    
    // function playSound(e) {
    //   const audio = document.querySelector(`audio[data-key="${e.currentTarget.dataset.key}"]`);
    //   const key = document.querySelector(`div[data-key="${e.currentTarget.dataset.key}"]`);
    //   if (!audio) return;

    //   if (e.type === "keydown" && !activeKeys.has(e.code)) {
    //     activeKeys.add(e.code);
    //     key.classList.add("playing");
    //     audio.currentTime = 0;
    //     audio.play();
    //   } else if (e.type === "keyup" && activeKeys.has(e.code)) {
    //     activeKeys.delete(e.code);
    //     key.classList.remove("playing");
    //     audio.pause();
    //     audio.currentTime = 0;
    //   }
    // }
    function playSound(e) {
      const audio = document.querySelector(
        `audio[data-key="${e.currentTarget.dataset.key}"]`
      );
      const key = document.querySelector(
        `div[data-key="${e.currentTarget.dataset.key}"]`
      );
      if (!audio) return;

      if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
      } else {
        audio.currentTime = 0;
        audio.play();
        isPlaying = true;
      }

      key.classList.toggle("playing");
    }

    function removePlayingClass() {
      keys.forEach((key) => key.classList.remove("playing"));
      audioElements.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
      // activeKeys.clear();
      isPlaying = false;
    }

    keys.forEach((key) => {
      key.addEventListener("transitionend", removeTransition);
      key.addEventListener("mousedown", playSound);
      key.addEventListener("mouseup", removePlayingClass);
      key.addEventListener("keydown", playSound);
      key.addEventListener("keyup", removePlayingClass);
    });

    return () => {
      keys.forEach((key) => {
        key.removeEventListener("transitionend", removeTransition);
        key.removeEventListener("mousedown", playSound);
        key.removeEventListener("mouseup", removePlayingClass);
        key.removeEventListener("keydown", playSound);
        key.removeEventListener("keyup", removePlayingClass);
      });
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

      <audio data-key="65" src="/assets/sounds/percussion/clap.wav"></audio>
      <audio data-key="83" src="/assets/sounds/percussion/hihat.wav"></audio>
      <audio data-key="68" src="/assets/sounds/percussion/kick.wav"></audio>
      <audio data-key="70" src="/assets/sounds/percussion/openhat.wav"></audio>
      <audio data-key="71" src="/assets/sounds/percussion/boom.wav"></audio>
      <audio data-key="72" src="/assets/sounds/percussion/ride.wav"></audio>
      <audio data-key="74" src="/assets/sounds/percussion/snare.wav"></audio>
      <audio data-key="75" src="/assets/sounds/percussion/tom.wav"></audio>
      <audio data-key="76" src="/assets/sounds/percussion/tink.wav"></audio>
    </div>
  );
}
