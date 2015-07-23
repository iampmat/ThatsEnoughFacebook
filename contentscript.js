var el = document.getElementById('stream_pagelet');
var fbContentArea = document.getElementById('contentArea');
var messageDiv = document.createElement('div');
var time = 0;

chrome.storage.local.get('time', function (result) {
    time = parseFloat(result.time);
    console.log(time);
    window.setTimeout(function () {removeFeed()}, time);
});

function removeFeed () {
  window.stop();
  el.style.display='none';
  showMessage();
}

function showMessage() {
  messageDiv.innerHTML = 'That\'s enough, now get back to work! - That\'s Enough Team';
  messageDiv.style.color = '#878787';
  messageDiv.style.fontSize = '12px';
  messageDiv.style.marginTop = '10px';
  fbContentArea.appendChild(messageDiv);
}

window.onscroll = function () {
  if ( el.style.display == 'none' ) {
    window.stop();
  }
};

// window.onhashchange = function () {
//   console.log('you are leaving this page');
//   el.style.display='block';
//   fbContentArea.removeChild(messageDiv);
//   window.start();
// };

var oldLocation = location.href;
var changeURLListener = setInterval(function() {
  if(location.href != oldLocation) {
    console.log('you are leaving this page');
    el.style.display='block';
    window.start;
    clearInterval(changeURLListener);
  }
}, 50);