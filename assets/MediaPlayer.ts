import { AutoPlay } from "./plugins/AutoPlay";
import { AutoPause } from "./plugins/AutoPause";

interface MediaPlayerArgs {
  el: HTMLMediaElement;
  plugins?: Array<AutoPlay | AutoPause>[];
}
export class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<AutoPlay | AutoPause>[];
  constructor({ el, plugins }: MediaPlayerArgs) {
    console.log("esto vale pluings ", plugins);
    this.media = el;
    this.plugins = plugins || [];
    this.initPlugins();
  }
  private initPlugins() {
    this.plugins.forEach((plugin) => {
      console.log("Esto vale plugins ", plugin);
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  managerPlayControl() {
    const isPuased = this.media.paused;
    isPuased ? this.media.play() : this.media.pause();
  }
  mute() {
    this.media.muted = true;
  }
  managerMuteControl() {
    this.media.muted = this.media.muted ? false : true;
  }
}
