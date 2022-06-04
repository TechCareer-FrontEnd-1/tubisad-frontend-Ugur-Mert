//random sayı üretme

var number;

function randomNumber() {
  number = Math.floor(Math.random() * 11);
  console.log(number);
}
randomNumber();

//girilen sayının doğruluğunu kontrol etme

var btnFound = document.getElementById("found");
let counter = 0;
btnFound.onclick = function () {
  var numb = document.getElementById("setNumb");

  if (number == numb.value) {
    document.getElementById("win").innerHTML = "You Found the Number !";
    counter++;
    document.getElementById("counter").innerHTML =
      "Step counter :" + " " + counter;
    startConfetti();
  } else {
    document.getElementById("win").innerHTML = "Try Again !";
    counter++;
    console.log("counter =" + " " + counter);
    document.getElementById("counter").innerHTML =
      "Step counter :" + " " + counter;
  }
};

//sayıyı resetleme

var btnReset = document.getElementById("reset");

btnReset.onclick = function () {
  randomNumber();
  stopConfetti();
  counter = 0;
  document.getElementById("win").innerHTML = "";
  document.getElementById("counter").innerHTML = "";
};
