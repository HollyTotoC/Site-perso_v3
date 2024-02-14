import { useEffect } from "react";

import click1 from "../assets/sounds/click/click1.mp3";
import click2 from "../assets/sounds/click/click2.mp3";
import click3 from "../assets/sounds/click/click3.mp3";
import click4 from "../assets/sounds/click/click4.mp3";
import click5 from "../assets/sounds/click/click5.mp3";

const soundList = [click1, click2, click3, click4, click5];

const useSoundPlayer = () => {
    useEffect(() => {
        // Préchargez tous les sons pour éviter des retards lors du premier clic
        soundList.forEach((sound) => {
            const audio = new Audio(sound);
            audio.load();
        });
    }, []);

    const playSound = () => {
        const soundPath =
            soundList[Math.floor(Math.random() * soundList.length)];
        const selectedAudio = new Audio(soundPath);

        selectedAudio
            .play()
            .then(() => {
                console.log("Lecture du son réussie");
            })
            .catch((error) => {
                console.error("Erreur lors de la lecture du son:", error);
            });
    };
    return playSound;
};

export default useSoundPlayer;
