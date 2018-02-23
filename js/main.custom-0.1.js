 window.addEventListener("load", function(event) {
  const videoContainer  = document.querySelector('.video__player--container');
  const video           = document.querySelector('.video__player');
  video.controls        = false; // todo: if html5 video is supported, only add my controls if javascript is enabled

  const videoControls   = document.querySelector('.video__player--controls');
  const play            = document.querySelector('.video__player__controls--play');
  let playPauseToggle   = document.querySelector('.fa-play');
  const playClasses     = play.classList;

   play.addEventListener('click', function () {
    if (video.ended) {
      video.currentTime = 0;
    }
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }, false);

  video.addEventListener('play', function () {
    playPauseToggle = document.querySelector('.fa-play');
    playPauseToggle.classList.remove('fa-play');
    playPauseToggle.classList.add('fa-pause');
    play.title = 'pause';
  }, false);

  video.addEventListener('pause', function () {
    playPauseToggle = document.querySelector('.fa-pause');
    playPauseToggle.classList.remove('fa-pause');
    playPauseToggle.classList.add('fa-play');
    play.title = 'play';
  }, false);


  video.addEventListener('ended', function () {
    this.pause();
    playPauseToggle = document.querySelector('.fa-pause');
    playPauseToggle.classList.remove('fa-pause');
    playPauseToggle.classList.add('fa-play');
  }, false);


}); // EOF
