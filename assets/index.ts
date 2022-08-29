import { MediaPlayer } from "./MediaPlayer";
import { AutoPlay } from "./plugins/AutoPlay";
import { AutoPause } from "./plugins/AutoPause";

const video = document.querySelector("video");
const buttonPlay = document.getElementById("playButton") as HTMLElement;
const buttonMute = document.getElementById("muteButton") as HTMLElement;
const player = new MediaPlayer({
  el: video as HTMLMediaElement,
  plugins: [new AutoPlay(), new AutoPause()],
});

buttonPlay.onclick = () => {
  player.managerPlayControl();
};

buttonMute.onclick = () => {
  player.managerMuteControl();
};

if ("serviceWorker" in navigator) {
  console.log("Entre :)");
  navigator.serviceWorker
    .register("/sw.js")
    .catch((error) => console.error("[fileCreationError]: ", error.message));
}
