"use client";

import { useEffect } from "react";

export default function MusicPlayer() {
  useEffect(() => {
    const audio = new Audio("/music/romantic.mp3");

    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = "auto";

    const startMusic = async () => {
      try {
        await audio.play();

        console.log("❤️ Romantic music started");
      } catch {
        console.log(
          "Autoplay blocked. Waiting for first user interaction..."
        );
      }
    };

    // Try immediately when website opens
    startMusic();

    // Fallback for mobile browsers
    const startAfterInteraction = async () => {
      try {
        await audio.play();

        console.log("❤️ Romantic music started after interaction");

        document.removeEventListener(
          "touchstart",
          startAfterInteraction
        );

        document.removeEventListener(
          "click",
          startAfterInteraction
        );

        document.removeEventListener(
          "pointerdown",
          startAfterInteraction
        );
      } catch (error) {
        console.log("Music could not start:", error);
      }
    };

    document.addEventListener(
      "touchstart",
      startAfterInteraction,
      { once: true }
    );

    document.addEventListener(
      "click",
      startAfterInteraction,
      { once: true }
    );

    document.addEventListener(
      "pointerdown",
      startAfterInteraction,
      { once: true }
    );

    return () => {
      audio.pause();
      audio.src = "";

      document.removeEventListener(
        "touchstart",
        startAfterInteraction
      );

      document.removeEventListener(
        "click",
        startAfterInteraction
      );

      document.removeEventListener(
        "pointerdown",
        startAfterInteraction
      );
    };
  }, []);

  // No visible music button
  return null;
}