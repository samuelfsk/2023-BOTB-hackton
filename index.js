const video = document.getElementById('video');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');

button1.addEventListener('click', function() {
  video.src = 'Videos/Inteference Video.mp4';
  video.load();
  video.play();
});

button2.addEventListener('click', function() {
  video.src = 'Videos/Flag Video.mp4';
  video.load();
  video.play();
});

button3.addEventListener('click', function() {
  video.src = 'Videos/holding call Video.mp4';
  video.load();
  video.play();
});

button4.addEventListener('click', function() {
    video.src = 'Videos/Patrick stats Video.mp4';
    video.load();
    video.play();
  });

  button5.addEventListener('click', function() {
    video.src = 'Videos/jalen.mp4';
    video.load();
    video.play();
  });