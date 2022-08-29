import { MediaPlayer } from "../MediaPlayer";

export class AutoPause {
  private threshold: number;
  player: MediaPlayer;
  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.run = this.run.bind(this);
  }
  run(player: MediaPlayer) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });
    observer.observe(this.player.media);
    document.addEventListener("visibilitychange", this.handleVisibility);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const { intersectionRatio } = entries[0];

    intersectionRatio >= this.threshold
      ? this.player.play()
      : this.player.pause();
  }

  private handleVisibility() {
    document.visibilityState === "hidden"
      ? this.player.pause()
      : this.player.play();
  }
}
