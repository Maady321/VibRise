import { useState, useRef } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.log("Audio playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <audio ref={audioRef} loop>
        <source src="https://assets.mixkit.co/music/preview/mixkit-romantic-piano-intro-115.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={togglePlay}
        className="bg-white/30 backdrop-blur-md border border-white/40 p-3 rounded-full text-rose-600 hover:bg-white/50 transition-all shadow-lg animate-pulse-slow"
        aria-label="Toggle Music"
      >
        {isPlaying ? <FaPause size={20} /> : <FaMusic size={20} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
