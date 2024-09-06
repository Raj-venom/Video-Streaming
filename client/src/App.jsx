import { useRef } from 'react'
import './App.css'
import VideoPlayer from './VideoPlayer'




function App() {
  const playerRef = useRef(null)
  const videoLink = "http://localhost:4000/uploads/course/a6fafa97-cb11-4f39-939c-c6380fc57b3d/index.m3u8";

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      },
    ],
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div>
        <h1>Video Player</h1>
      </div>

      <VideoPlayer
        options={videoPlayerOptions}
        onReady={handlePlayerReady}
      />

    </>
  )
}

export default App
