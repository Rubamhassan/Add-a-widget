
// Add jQuery and CSS to the page

var head = document.getElementsByTagName("head")[0];

// add stylesheet link
var link = document.createElement("link");
link.rel = 'stylesheet';
link.href = 'style.css';
head.appendChild(link);

// add script tag for jQuery
var script = document.createElement('script');
script.src ='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';
script.type = 'text/javascript';
script.onload = function() {
    // code runs when script loaded
    var $ = window.$ = window.jQuery;
    initializeWidget();
};
head.appendChild(script);
  
  
function initializeWidget() {
  var div = '<div id="modal" class="hide">' +
      '<center>Modal contents here.</center>' +
      '<button onclick="action_yes()">Got it!</button>' +
      '</div>';
  var div = `
  <div id="modal" class="hide"> 
      <center>Hello There!</center>
      <center>
      <p style="text-style: bold">Lets write some code together!</p>
      </center>
      <center> <button onclick="action_yes()">Got it!</button></center>
  </div>`;

  var button = '<button id="action" onclick="calltoaction()">Click me!</button>';
  
  $('#doge_widget').after(div);
  $('body').append(button);
}

function calltoaction() {
  console.log('calltoaction');
  $("#modal").removeClass('hide');
  $("#action").addClass('hide');
}

function action_yes() {
  $("#modal").addClass('hide');
  $("#action").removeClass('hide');

}
