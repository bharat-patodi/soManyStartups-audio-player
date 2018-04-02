(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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

},{"fs":1}]},{},[2]);
