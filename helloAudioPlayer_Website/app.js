/*
-------------------------------------------------
The main code
-------------------------------------------------
*/
const videoContainer = document.getElementById("videoContainer");
const fs = require('fs');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');

/*
-------------------------------------------------
Initialization
-------------------------------------------------
*/

function init() {
  console.log("Everythings perfect.");

  // Event Listeners
  playBtn.addEventListener("click", playBtnFunction);

  pauseBtn.addEventListener("click", pauseBtnFunction);

  videoContainer.addEventListener("click", function() {
    console.log("single click");
  });

};

function playBtnFunction() {
  videoContainer.play();
};

function pauseBtnFunction() {
  videoContainer.pause();
};


window.onload = init;

/*
-------------------------------------------------
Suggested Improvements:
(a) Single click pause
(b) For playing the file, it needs to be uploaded first to the server, then the player can get its path. Find out how to upload.

-------------------------------------------------
*/
