window.addEventListener( 'load', function() {
  var box = document.getElementById('box'),
	 
      docHeight = document.documentElement.offsetHeight;
  
  window.addEventListener( 'scroll', function() {
	 
        // normalize scroll position as percentage
    var scrolled = window.scrollY / ( docHeight - window.innerHeight ),
        transformValue = 'scale('+(1-scrolled)+')';
	
    box.style.WebkitTransform = transformValue;
    box.style.MozTransform = transformValue;
    box.style.OTransform = transformValue;
    box.style.transform = transformValue;
	  if((1-scrolled)< 0.81){ document.getElementById('box').style.display = "none"}
	  else {document.getElementById('box').style.display = ""};
	  
    
  }, false);
  

  
  function transitionEnded(event) {
    // disable transition
    box.className = '';
  }
  
  box.addEventListener( 'webkitTransitionEnd', transitionEnded, false);
  box.addEventListener( 'transitionend', transitionEnded, false);
  box.addEventListener( 'oTransitionEnd', transitionEnded, false);
  
}, false);