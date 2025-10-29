import { useEffect, useRef, useState } from 'react';
import audioFile from "../assets/sounds/scroll_long.mp3";

const useScrollAudio = (volumeLevel: number) => {
  const audioRef = useRef(new Audio(audioFile));
  const scrollTimeoutRef = useRef<number>(0);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    // Gestionnaire pour la première interaction utilisateur
    const startAudioOnUserInteraction = () => {
      // Jouez et mettez immédiatement en pause pour débloquer l'audio
      audioRef.current.play().then(() => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setUserInteracted(true); // Indique qu'une interaction a eu lieu
      }).catch(() => {
        // Silent catch for audio autoplay restrictions
      });

      // Nettoyer: supprimer les écouteurs après la première interaction
      window.removeEventListener('click', startAudioOnUserInteraction);
      window.removeEventListener('keydown', startAudioOnUserInteraction);
    };

    window.addEventListener('click', startAudioOnUserInteraction);
    window.addEventListener('keydown', startAudioOnUserInteraction);

    const handleScroll = () => {
      if (userInteracted) {
        // Jouez l'audio seulement si l'utilisateur a interagi avec la page
        if (audioRef.current.paused) {
          audioRef.current.play().catch(() => {
            // Silent catch for audio autoplay restrictions
          });
        }

        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          audioRef.current.pause();
        }, 50); // Pause après 100ms d'inactivité

        
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      audioRef.current.pause();
    };
  }, [userInteracted]);

  useEffect(() => {
    audioRef.current.volume = volumeLevel;
    audioRef.current.addEventListener('ended', () => {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Silent catch for audio autoplay restrictions
      });
    });

    return () => {
      audioRef.current.removeEventListener('ended', () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {
          // Silent catch for audio autoplay restrictions
        });
      });
    };
  }, []);
};

export default useScrollAudio;
