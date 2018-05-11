// hide/unhide application styles

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