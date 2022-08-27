export class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
  }
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });
    observer.observe(this.player.media);
    document.addEventListener("visibilitychange", this.handleVisibility);
  }

  handleIntersection(entries) {
    const { intersectionRatio } = entries[0];

    intersectionRatio >= this.threshold
      ? this.player.play()
      : this.player.pause();
  }

  handleVisibility() {
    document.visibilityState === "hidden"
      ? this.player.pause()
      : this.player.play();
  }
}
