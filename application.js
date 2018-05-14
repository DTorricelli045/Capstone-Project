
// functions for opening applications
function openNav() {
  document.getElementById("appli").style.height = "100%";
}

function openNav2() {
  document.getElementById("appli2").style.height = "100%";
}

function openNav3() {
  document.getElementById("appli3").style.height = "100%";
}


// functions for closing applications
function closeNav() {
  document.getElementById("appli").style.height = "0%";
}

function closeNav2() {
  document.getElementById("appli2").style.height = "0%";
}

function closeNav3() {
  document.getElementById("appli3").style.height = "0%";
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

window.addEventListener("load", openNav())