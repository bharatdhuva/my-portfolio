import { useEffect, useRef, useState } from "react";
import { Music, Play, Pause, VolumeX } from "lucide-react";
import musicUrl from "@/assets/mondamusic-lofi-lofi-girl-lofi-music-529555.mp3";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Initialize Audio
  useEffect(() => {
    const audio = new Audio(musicUrl);
    audio.loop = true;
    audio.volume = 0.12; // Light volume
    audioRef.current = audio;

    // Sync play/pause state from the audio element events
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    function startAudioOnGesture() {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => {
            removeInteractionListeners();
          })
          .catch((err) => {
            console.log("Autoplay blocked by browser. Awaiting user interaction with audio toggle widget.", err);
          });
      }
    }

    function removeInteractionListeners() {
      window.removeEventListener("click", startAudioOnGesture, { capture: true });
      window.removeEventListener("pointerdown", startAudioOnGesture, { capture: true });
      window.removeEventListener("touchstart", startAudioOnGesture, { capture: true });
      window.removeEventListener("keydown", startAudioOnGesture, { capture: true });
    }

    // Add interaction listeners as capturing to bypass child element stopPropagation()
    window.addEventListener("click", startAudioOnGesture, { capture: true });
    window.addEventListener("pointerdown", startAudioOnGesture, { capture: true });
    window.addEventListener("touchstart", startAudioOnGesture, { capture: true });
    window.addEventListener("keydown", startAudioOnGesture, { capture: true });

    // Try to play immediately (in case autoplay is already permitted by browser history/settings)
    audio.play()
      .then(() => {
        removeInteractionListeners();
      })
      .catch(() => {
        console.log("Autoplay initially blocked. Awaiting user interaction (click, pointerdown, touchstart, keydown) to start playing by default.");
      });

    // Keyboard shortcut handler (Press 'M' or 'm' to play/pause)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "m") {
        // Skip if user is typing in an input or textarea
        const activeEl = document.activeElement;
        if (
          activeEl &&
          (activeEl.tagName === "INPUT" ||
            activeEl.tagName === "TEXTAREA" ||
            activeEl.getAttribute("contenteditable") === "true")
        ) {
          return;
        }

        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      removeInteractionListeners();
      window.removeEventListener("keydown", handleKeyDown);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.pause();
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Audio playback failed:", err);
        });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 select-none pointer-events-none">
      {/* Tooltip */}
      <div
        className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-medium tracking-wide bg-background/90 text-foreground border border-border/40 shadow-lg backdrop-blur-md transition-all duration-300 pointer-events-none flex items-center gap-1 ${
          showTooltip || isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4"
        }`}
      >
        <span className="opacity-90">Lofi Ambience</span>
        <span className="hidden sm:inline-block ml-1 px-1 py-0.5 rounded bg-muted text-[10px] text-muted-foreground font-mono">
          M
        </span>
      </div>

      {/* Music Toggle Widget */}
      <button
        onClick={togglePlay}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Toggle background music"
        className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-background/80 hover:bg-accent/10 border border-border/80 shadow-lg backdrop-blur-md cursor-pointer transition-all duration-300 group pointer-events-auto ${
          isPlaying ? "scale-105" : "scale-100"
        }`}
      >
        {isPlaying ? (
          // Active state (Equalizer Visualizer or Mute on hover)
          showTooltip ? (
            <VolumeX className="h-4 w-4 sm:h-5 w-5 text-foreground/80 group-hover:scale-110 transition-transform" />
          ) : (
            <div className="flex items-end gap-[2px] sm:gap-[3px] h-3 sm:h-4">
              <span className="w-[2px] sm:w-[3px] bg-foreground/90 rounded-full animate-equalizer-1 h-2 sm:h-3" />
              <span className="w-[2px] sm:w-[3px] bg-foreground/90 rounded-full animate-equalizer-2 h-3 sm:h-4" />
              <span className="w-[2px] sm:w-[3px] bg-foreground/90 rounded-full animate-equalizer-3 h-1.5 sm:h-2" />
              <span className="w-[2px] sm:w-[3px] bg-foreground/90 rounded-full animate-equalizer-4 h-2.5 sm:h-3.5" />
            </div>
          )
        ) : (
          // Paused/Muted state (Play or Music note)
          showTooltip ? (
            <Play className="h-4 w-4 sm:h-5 w-5 ml-0.5 text-foreground/80 group-hover:scale-110 transition-transform" />
          ) : (
            <Music className="h-4 w-4 sm:h-5 w-5 text-foreground/60" />
          )
        )}
      </button>
    </div>
  );
}
