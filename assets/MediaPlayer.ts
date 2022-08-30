interface MediaPlayerArgs {
  el: HTMLMediaElement;
  plugins?: Array<any>[];
}
export class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>[];
  container: HTMLElement;
  constructor({ el, plugins }: MediaPlayerArgs) {
    console.log("esto vale pluings ", plugins);
    this.media = el;
    this.plugins = plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement("div");
    this.container.style.position = "relative";
    this.media.parentNode?.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
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
