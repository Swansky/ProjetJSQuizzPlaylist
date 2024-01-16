export class Media {
  constructor(title, year, duration) {
    this.title = title;
    this.duration = duration;
    this.isPlaying = false;
    this.year = year;
  }

  getDurationInSecond() {
    const durationParts = this.duration.split(':');
    if (durationParts.length === 3) {
      return parseInt(durationParts[0]) * 3600 + parseInt(durationParts[1]) * 60 + parseInt(durationParts[2]);
    } else if (durationParts.length === 2) {
      return parseInt(durationParts[0]) * 60 + parseInt(durationParts[1]);
    }
    return parseInt(durationParts[0]);
  }

  play() {
    this.isPlaying = true;
  }

  stop() {
    this.isPlaying = false;
  }

  toHTML() {
    throw new Error('You have to implement the method toHTML!');
  }
}
