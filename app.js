const firstScriptTag = document.getElementsByTagName('script')[0];
const playpause = document.querySelector('.playpause');
const playpause_btn = document.querySelector('.button')
const body = document.querySelector('body')
const tag = document.createElement('script');
let darkmode = false
let player;


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

document.addEventListener('keyup', () => {
  console.log("clicked")
  if (darkmode == true) {
    body.style.backgroundColor = "#FFFFFF"
    playpause_btn.style.backgroundColor = "#191919"
    darkmode = false
  } else {
    body.style.backgroundColor = "#191919"
    playpause_btn.style.backgroundColor = "#f0f0f0"
    darkmode = true
  }
})

tag.src = "https://www.youtube.com/player_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
