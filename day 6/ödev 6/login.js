const dbUserEmail = "deneme@gmail.com";
const dbUserPassword = "root";

var btnLogin = document.getElementById("login");

let attempts = 5;

btnLogin.onclick = function () {
  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("userPassword").value;

  console.log(userEmail, userPassword);

  // db ile karşılaştırma
  if (attempts === 0) {
    alert("Your account has been blocked.");
  } else {
    if (dbUserEmail === userEmail && dbUserPassword === userPassword) {
      alert("Giriş yapıldı !");
    } else {
      attempts--;
    }
  }
  if (attempts === 0) {
    document.getElementById("attempts").innerHTML =
      "Your account has been blocked.";
  } else {
    document.getElementById("attempts").innerHTML =
      "You have " + attempts + " attempts left.";
    document.getElementById("incorrect").innerHTML =
      "Incorrect e mail or password";
  }
};
