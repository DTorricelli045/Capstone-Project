
// functions for opening applications
function openNav1() {
  document.getElementById("appli").style.display="block";
}

function openNav2() {
  document.getElementById("appli2").style.display="block";
}

function openNav3() {
  document.getElementById("appli3").style.display="block";
}


// functions for closing applications
function closeNav() {
  document.getElementById("appli").style.display="none";
}

function closeNav2() {
  document.getElementById("appli2").style.display="none";
}

function closeNav3() {
  document.getElementById("appli3").style.display="none";
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


// Add google maps
function myMap() {
  var mapOptions = {
      center: new google.maps.LatLng(33.481580, -112.152224),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.HYBRID
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }


// Run on load
window.addEventListener("load", openNav1())
window.addEventListener("load", closeNav2())
window.addEventListener("load", closeNav3())