import "./lib/d3.v6.js";

function createPlayButton() {
  let playSVG = d3
    .select("#playButton")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 100 100")
    .attr("preserveAspectRatio", "xMidYMid meet");

  playSVG
    .append("circle")
    .attr("cx", "50")
    .attr("cy", "50")
    .attr("r", "45")
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", "5");

  playSVG
    .append("polygon")
    .attr("points", "35,25 75,50 35,75")
    .attr("fill", "white");
}

function createPauseButton() {
  let pauseSVG = d3
    .select("#playButton")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 100 100")
    .attr("preserveAspectRatio", "xMidYMid meet")

  pauseSVG
    .append("rect")
    .attr("x", "30")
    .attr("y", "25")
    .attr("width", "15")
    .attr("height", "50")
    .attr("fill", "white");

  pauseSVG
    .append("rect")
    .attr("x", "55")
    .attr("y", "25")
    .attr("width", "15")
    .attr("height", "50")
    .attr("fill", "white");
}

function createPrevButton() {
  let prevSVG = d3
    .select("#prevButton")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 100 100")
    .attr("preserveAspectRatio", "xMidYMid meet");

  prevSVG
    .append("polygon")
    .attr("points", "75,25 75,75 25,50")
    .attr("fill", "white");

  prevSVG
    .append("rect")
    .attr("x", "25")
    .attr("y", "25")
    .attr("width", "15")
    .attr("height", "50")
    .attr("fill", "white");
}

function createNextButton() {
  let nextSVG = d3
    .select("#nextButton")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 100 100")
    .attr("preserveAspectRatio", "xMidYMid meet");

  nextSVG
    .append("polygon")
    .attr("points", "25,25 25,75 75,50")
    .attr("fill", "white");

  nextSVG
    .append("rect")
    .attr("x", "60")
    .attr("y", "25")
    .attr("width", "15")
    .attr("height", "50")
    .attr("fill", "white");
}

createPlayButton();
createPrevButton();
createNextButton();

export function switchPlayPause(play) {
  d3.select("#playButton").select("svg").remove();

  if (play) {
    createPauseButton();
  }
  else {
    createPlayButton();
  }
}
