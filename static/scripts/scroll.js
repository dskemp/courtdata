window.onscroll = function() {onScroll()};

var header = document.getElementById("header");
var tops = header.offsetTop;

function onScroll()
 {
	  if (window.pageYOffset >= tops) 
	  {
		header.classList.add("sticky");
	  }
	  else
	  {
		header.classList.remove("sticky");
	  }
 }