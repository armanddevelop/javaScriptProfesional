export function AutoPlay() {}

AutoPlay.prototype.run = function (player) {
  if (!player.muted) {
    player.muted = true;
  }

  player.media.play();
};