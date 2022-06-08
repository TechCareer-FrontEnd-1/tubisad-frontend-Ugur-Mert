confrm.onclick = function compare() {
  let password = document.getElementById("password").value;
  let rePassword = document.getElementById("rePassword").value;
  console.log(password.length);
  if (password.length <= 3) {
    document.getElementById("result").innerHTML =
      "The password cannot be less than 4 characters.";
  } else if (password === rePassword) {
    document.getElementById("result").innerHTML = "password confirmed.";
  } else {
    document.getElementById("result").innerHTML =
      "passwords do not match." + "<br>" + "";
  }
};
