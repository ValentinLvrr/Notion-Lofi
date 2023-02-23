const playpause = document.querySelector('.playpause');
let firstScriptTag = document.getElementsByTagName('script')[0];
let tag = document.createElement('script');
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

(function setDarkMode() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  switch (isDarkMode) {
    case true:
      document.body.style.backgroundColor = "black"
      break
    case false:
      document.body.style.backgroundColor = "white"
      break
    default:
      break
  }
})()

tag.src = "https://www.youtube.com/player_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

playpause.addEventListener('click', () => {
  switchVideoState()
  playpause.classList.toggle('playing');
});


