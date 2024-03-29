import { useEffect, useRef } from "react";
import "./camera.css";

export default function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let videoStream;

    const startVideo = async () => {
      try {
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = videoRef.current;
        video.srcObject = videoStream;

        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startVideo();

    return () => {
      // Cleanup: Stop the video stream when the component unmounts
      if (videoStream) {
        videoStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const takePicture = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL('image/png');
    // console.log(imageUrl);

    const img = document.createElement('img');
    img.src = imageUrl;

    const pictureContainer = document.createElement('div');
    pictureContainer.classList.add('picture-container');
    pictureContainer.appendChild(img);

    const videoContainer = document.querySelector('.video-container');
    videoContainer.appendChild(pictureContainer);
  };

  return (
    <div id="camera" className="camera">
      <h6>This is the video page.</h6>
      <video ref={videoRef} autoPlay></video>

      <button id="take-picture-btn" onClick={takePicture}>
        Take Picture
      </button>

      <div className="video-container">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}