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
  var scrollPercentage = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) - 0.228;
    
  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage * 4.5;
  
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
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000)
  {
    document.getElementById("worktext").className = "appear";
  }

  if (document.body.scrollTop > 812 || document.documentElement.scrollTop > 812)
  {
    document.getElementById("a").className = "yearappear";
  }

  if (document.body.scrollTop > 1009 || document.documentElement.scrollTop > 1009)
  {
    document.getElementById("b").className = "yearappear";
  }

  if (document.body.scrollTop > 1105 || document.documentElement.scrollTop > 1105)
  {
    document.getElementById("c").className = "yearappear";
  }

  if (document.body.scrollTop > 1230 || document.documentElement.scrollTop > 1230)
  {
    document.getElementById("d").className = "yearappear";
  }

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
  {
    document.getElementById("introtext").className = "introslideup";
  }

  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000)
  {
    document.getElementById("apic").className = "picappear";
  }

  if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100)
  {
    document.getElementById("bpic").className = "picappear";
  }

  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200)
  {
    document.getElementById("cpic").className = "picappear";
  }

  if (document.body.scrollTop > 1250 || document.documentElement.scrollTop > 1250)
  {
    document.getElementById("dpic").className = "picappear";
  }

  if (document.body.scrollTop > 1285 || document.documentElement.scrollTop > 1285)
  {
    document.getElementById("findjob").className = "findjobappear";
  }

  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500)
  {
    document.getElementById("skillstext").className = "skillslideup";
  }
}
