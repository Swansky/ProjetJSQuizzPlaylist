import { Media } from "./Media.js";
export class Song extends Media {
  constructor(title, artist, year, duration) {
    super(title, year, duration);
    this.artist = artist;
  }

  toHTML() {
    return `
            <div class="media">
              <div class="media-title">${this.title}</div>
              <div class="song-artist">${this.artist}</div>
              <div class="media-year">${this.year}</div>
              <div class="media-duration">${this.duration}</div>
            </div>
        `;
  }
}
