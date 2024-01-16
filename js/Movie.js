import {Media} from "./Media.js";

export class Movie extends Media {

  constructor(title, year, duration,producers) {
    super(title, year, duration);
    this.producers = producers;
  }

  toHTML() {
    return `
            <div class="media">
              <div class="media-title">${this.title}</div>
              <div class="movieproducers">${this.producers}</div>
              <div class="media-year">${this.year}</div>
              <div class="media-duration">${this.duration}</div>
            </div>
        `;
  }
}
