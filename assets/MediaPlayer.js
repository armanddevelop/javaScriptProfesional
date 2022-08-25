export function MediaPlayer({ el, plugins }) {
  console.log("esto vale pluings ", plugins);
  this.media = el;
  this.plugins = plugins || [];
  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  const player = {
    play: () => this.media.play(),
    pause: () => this.media.pause(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },
    set muted(value) {
      this.media.muted = value;
    },
  };
  this.plugins.forEach((plugin) => {
    plugin.run(player);
  });
};

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.managerPlayControl = function () {
  const isPuased = this.media.paused;
  isPuased ? this.media.play() : this.media.pause();
};

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};

MediaPlayer.prototype.managerMuteControl = function () {
  this.media.muted = this.media.muted ? false : true;
};
