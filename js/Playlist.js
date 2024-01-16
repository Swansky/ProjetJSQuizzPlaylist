export class Playlist {
  constructor() {
    this.songs = [];
    this.currentSongIndex = 0;
  }

  add(chanson) {
    this.songs.push(chanson);
  }

  play() {
    const currentSong = this.songs[this.currentSongIndex];
    currentSong.play();
  }

  stop() {
    const currentSong = this.songs[this.currentSongIndex];
    currentSong.stop();
  }

  next() {
    this.stop();
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.play();
  }

  renderInElement(element) {
    element.innerHTML = this.songs.map(song => song.toHTML()).join('');

  }

  previous() {
    this.stop();
    this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
    this.play();
  }


  getCurrentSong() {
    return this.songs[this.currentSongIndex];
  }


}
