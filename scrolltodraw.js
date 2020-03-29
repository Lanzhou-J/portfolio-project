// Get a reference to the <path>
var path = document.querySelector('#line-path');

// Get length of path... ~577px in this case
var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength +' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
path.getBoundingClientRect();

// When the page scrolls...
window.addEventListener("scroll", function(e) {
 
  // What % down is it? 
  // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
  // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
  var scrollPercentage = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) - 0.16;
    
  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage * 6;
  
  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
    
  // When complete, remove the dash array, otherwise shape isn't quite sharp
 // Accounts for fuzzy math
  if (scrollPercentage >= 0.15) {
    path.style.strokeDasharray = "none";
    
  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
  }
  
});



window.onscroll = function(){myFunction()};

function myFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800)
  {
    document.getElementById("worktext").className = "appear";
  }
}