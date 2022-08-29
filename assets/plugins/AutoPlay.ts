import { MediaPlayer } from "../MediaPlayer";
export class AutoPlay {
  constructor() {
    this.run = this.run.bind(this);
  }
  run(player: MediaPlayer) {
    if (!player.media.muted) {
      player.media.muted = true;
    }

    player.media.play();
  }
}
