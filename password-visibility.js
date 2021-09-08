function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// HTML
// Password: <input type="password" value="FakePSW" id="myInput"><br><br>
// <input type="checkbox" onclick="myFunction()">Show Password
