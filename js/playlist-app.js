import {Playlist} from "./Playlist.js";
import {Song} from "./Song.js";
import {Movie} from "./Movie.js";
import {switchPlayPause} from "./svgs.js";


const myPlaylist = new Playlist();
const progressElement = document.getElementById(`progressElement`);
let currentTime = 0;
[
  new Song("As Time Goes By", "Dooley Wilson", 1942, "2:40"),
  new Song("Bohemian Rhapsody", "Queen", 1975, "5:05"),
  new Song("Imagine", "John Lennon", 1971, "3:23"),
  new Song("Smells Like Teen Spirit", "Nirvana", 1991, "2:01"),
  new Song("What a Wonderful World", "Louis Armstrong", 1967, "2:18"),
  new Movie("The Godfather", 1972, "2:55:00", ["Francis Ford Coppola"]),
  new Movie("The Shawshank Redemption", 1994, "2:22:00", ["Frank Darabont"]),
  new Movie("Schindler's List", 1993, "3:15:00", ["Steven Spielberg"]),
  new Movie("Raging Bull", 1980, "2:09:00", ["Martin Scorsese"]),
  new Movie("Casablanca", 1942, "1:42:00", ["Michael Curtiz"])
].forEach(song => myPlaylist.add(song));

const progressInterval = setInterval(() => {
  let currentSong = myPlaylist.getCurrentSong();
  if(currentTime >= currentSong.getDurationInSecond()) {
    myPlaylist.next();
    currentTime = 0;
    myPlaylist.renderInElement(playlist);
  }else if (currentSong.isPlaying) {
    currentTime+=0.01;
    const progressPercentage = (currentTime / currentSong.getDurationInSecond()) * 100;
    progressElement.style.width = progressPercentage + '%';
  }
  songTitle.innerHTML = currentSong.title;
}, 10);


function playPauseSong() {
  let currentSong = myPlaylist.getCurrentSong()
  if (currentSong.isPlaying) {
    myPlaylist.stop();
    switchPlayPause(false)
  } else {
    myPlaylist.play();
    switchPlayPause(true)
  }
  myPlaylist.renderInElement(playlist);
}

function previousSong() {
  myPlaylist.previous();
  currentTime = 0;
  switchPlayPause(true)
  myPlaylist.renderInElement(playlist);
}

function nextSong() {
  myPlaylist.next();
  currentTime = 0;
  switchPlayPause(true)
  myPlaylist.renderInElement(playlist);
}

window.playPauseSong = playPauseSong;
window.previousSong = previousSong;
window.nextSong = nextSong;


myPlaylist.renderInElement(playlist);

