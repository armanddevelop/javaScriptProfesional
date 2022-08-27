import { MediaPlayer } from "./MediaPlayer.js";
import { AutoPlay } from "./plugins/AutoPlay.js";
import { AutoPause } from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const buttonPlay = document.getElementById("playButton");
const buttonMute = document.getElementById("muteButton");
const player = new MediaPlayer({
  el: video,
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
