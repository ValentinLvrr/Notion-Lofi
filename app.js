const playpause = document.querySelector('.playpause');
const playpause_btn = document.querySelector('.button')
const bg_zone = document.querySelector('.bg')

let firstScriptTag = document.getElementsByTagName('script')[0];
let tag = document.createElement('script');
let player;
let darkmode = true


function onYouTubePlayerAPIReady() {
  player = new YT.Player('video');
}

function switchVideoState() {
  switch (player.getPlayerState()) {
    case 2:
    case 5:
    case -1:
      player.playVideo();
      break;
    case 1:
      player.pauseVideo();
      break;
    default:
      break;
  }
}

playpause.addEventListener('click', () => {
  switchVideoState()
  playpause.classList.toggle('playing');
});

bg_zone.addEventListener('dblclick', () => {
  if (darkmode == true) {
    bg_zone.style.backgroundColor = "#FFFFFF"
    playpause_btn.style.backgroundColor = "#191919"
    darkmode = false
  } else {
    bg_zone.style.backgroundColor = "#191919"
    playpause_btn.style.backgroundColor = "#f0f0f0"
    darkmode = true
  }
})

tag.src = "https://www.youtube.com/player_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
