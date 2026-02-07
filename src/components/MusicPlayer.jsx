import { useState, useRef, useEffect } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);


  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
        alert("Could not play audio. Please check your browser settings and allow audio playback.");
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Debug audio loading
  useEffect(() => {
    const audio = audioRef.current;
    
    const handleLoadedData = () => {
      console.log('Audio loaded successfully');
    };
    
    const handleError = (e) => {
      console.error('Audio error:', e);
    };
    
    const handleCanPlay = () => {
      console.log('Audio can play');
    };

    if (audio) {
      audio.addEventListener('loadeddata', handleLoadedData);
      audio.addEventListener('error', handleError);
      audio.addEventListener('canplay', handleCanPlay);
    }

    // Cleanup function to prevent memory leaks
    return () => {
      if (audio) {
        audio.removeEventListener('loadeddata', handleLoadedData);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);


  return (
    <div className="fixed top-5 right-5 z-50">
      <audio ref={audioRef} loop preload="auto">
        <source src="https://www.bensound.com/bensound-music/bensound-love.mp3" type="audio/mp3" />
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mp3" />
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
