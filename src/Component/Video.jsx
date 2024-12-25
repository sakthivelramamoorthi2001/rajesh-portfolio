import { useEffect, useRef } from "react";

const Video = ({ url, className }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Play video when the component mounts or becomes visible
    const playVideo = () => {
      if (video) {
        const playButton = video.querySelector("#playButton");
        if (playButton) {
          playButton.style.display = "none"; // Hide the play button
        }
        video.play().catch((error) => {
          console.error("Autoplay failed:", error);
        });
      }
    };

    playVideo();

    document.addEventListener("visibilitychange", playVideo);

    return () => {
      document.removeEventListener("visibilitychange", playVideo);
    };
  }, []);
  return (
    <video
      className={className}
      src={url}
      ref={videoRef}
      muted={true}
      autoPlay={true}
      loop={true}
      controls={false}
    ></video>
  );
};

export default Video;
