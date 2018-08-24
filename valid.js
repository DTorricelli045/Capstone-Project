// Javascript to validate forms

//form 1 donApply

"use strict";

//global variable 
var formValidity = true;

// function take away default submit
function removeSelectDefaults() {
    var emptyBoxes = document.querySelectorAll("#donApply select");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}

// function to validate required fields
function validateDonate() {
    // support variables for validation
    var inputElements = document.querySelectorAll("#donApply input");
    var donErr = document.getElementById("donateError");
    var fieldsetValidity = true;
    var elementCount = inputElements.length;
    var currentElement;

    // try catch to handle a loop through the fields
    try {
        // loop through input fields looking for blanks
        for (var i = 0; i < elementCount; i++) {
            currentElement = inputElements[i];
            //blanks
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        // if the validitiy is not correct then throw this error
        if (fieldsetValidity === false) {
            throw "Please complete all donation info."
        } else {
            donErr.innerHTML = "none";
            donErr.style.display = "";
        }




        // validate select list field
        currentElement = document.querySelectorAll("#donApply select");
        if (currentElement.selectedIndex === -1) {
            currentElement.style.border = "1px solid red";
            fieldsetValidity = false;
        } else {
            currentElement.style.border = "";
        }

    } catch (msg) {
        donErr.style.display = "block";
        donErr.innerHTML = msg;
        formValidity = false;
    }
}


// function to validate form on submit event
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;

    validateDonate();
    validateQuestion()

    // results of validation tests
    if (formValidity === false) {
        document.getElementById("donateError").innerHTML = "Please fix the indicated problems.";
        document.getElementById("donateError").style.display = "block";
    } else {
        document.getElementById("donateError").innerHTML = "";
        document.getElementById("donateError").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    }
}

//form 3 questApply

function validateQuestion() {
    // support variables for validation
    var inputElements = document.querySelectorAll("#questApply input");
    var queErr = document.getElementById("questError");
    var fieldsetValidity = true;
    var elementCount = inputElements.length;
    var textBox = document.getElementsByClassName("textInput");
    var currentElement;

    // try catch to handle a loop through the fields
    try {
        // loop through input fields looking for blanks
        for (var i = 0; i < elementCount; i++) {
            currentElement = inputElements[i];
            //blanks
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
                // no blanks
            } else {
                currentElement.style.background = "white";
            }
        }
        // if the validitiy is not correct then throw this error
        if (fieldsetValidity === false) {
            throw "Please complete all question info."
        } else {
            queErr.innerHTML = "";
            queErr.style.display = "";
        }
        // if the textarea is empty then change the background color and indicate that it is not completed.
        if (textBox.value === "") {
            currentElement.style.background = "rgb(255,233,233)";
            fieldsetValidity = false;
        } else {
            currentElement.style.background = "white";
        }
    } catch (msg) {
        queErr.style.display = "block";
        queErr.innerHTML = msg;
        formValidity = false;
    }
}


// function to create our event listeners
function createEventListeners() {
    // event listener for submit
    // event handeler validateForm() 
    if (window.addEventListener) {
        window.addEventListener("submit", validateForm, false);
    } else if (window.attachEvent) {
        window.attachEvent("onsubmit", validateForm);
    }
        removeSelectDefaults()
}

// add a load event listener
//event handler will be createEventListeners()

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}



//form 2 jobApply
