"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music/romantic.mp3");

    audio.loop = true;
    audio.volume = 0.35;

    audioRef.current = audio;

    const startMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Browser blocked autoplay.
        // Music will start after the user interacts.
      }
    };

    startMusic();

    const handleFirstInteraction = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {}

      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      audio.pause();
      audio.src = "";

      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {}
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-2">

      {/* Music button */}
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-yellow-400/40
          bg-black/60
          text-yellow-200
          shadow-[0_0_25px_rgba(212,175,55,0.15)]
          backdrop-blur-xl
          transition-all
          duration-300
          hover:scale-110
          hover:border-yellow-300
        "
      >
        <Music
          size={20}
          className={isPlaying ? "animate-pulse" : ""}
        />
      </button>

      {/* Mute button */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/50
          text-gray-300
          backdrop-blur-xl
          transition-all
          duration-300
          hover:scale-105
          hover:border-yellow-300/40
        "
      >
        {isMuted ? (
          <VolumeX size={17} />
        ) : (
          <Volume2 size={17} />
        )}
      </button>

    </div>
  );
}