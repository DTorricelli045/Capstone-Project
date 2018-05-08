// hide/unhide application styles
function apply() {
  var x = document.getElementById("app");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

function apply2() {
  var y = document.getElementById("app2");
  if (y.style.display === "none") {
      y.style.display = "block";
  } else {
      y.style.display = "none";
  }
}

function apply3() {
  var z = document.getElementById("app3");
  if (z.style.display === "none") {
      z.style.display = "block";
  } else {
      z.style.display = "none";
  }
}


//  button styles
var header = document.getElementById("buttons");
var bttn = header.getElementsByClassName("appHide");
for (var i = 0; i < bttn.length; i++) {
  bttn[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var act = document.getElementById("applications");
var divs = act.getElementsByClassName("app");
for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}