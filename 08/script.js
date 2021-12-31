if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        alert("test");
        e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("test");
      window.event.returnValue = false;
    });
  }