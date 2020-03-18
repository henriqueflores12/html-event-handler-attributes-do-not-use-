var elUsername = document.getElementById("username"); //get username input
var elMsg = document.getElementById("feedback"); //get feedback element

function checkUsername(minLength) {
  //declare function
  if (elUsername.value.length < minLength) {
    //if username too short

    elMsg.innerHTML = "Username must be " + minLength + "characters or more"; //set message
  } else {
    //otherwise
    elMsg.innerHTML = ""; //clear message
  }
}

if (elUsername.addEventListener) {
  //if event listener supported
  elUsername.addEventListener(
    //when username loses focus
    "blur",
    function() {
      checkUsername(5); //call checkUsername()
    },
    false //capture during bubble phase
  );
} else {
  //otherwise
  elUsername.attachEvent("onblur", function() {
    //IE fallback: onblur
    checkUsername(5); //call checkUsername()
  });
}
console.log(document);
