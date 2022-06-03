//random sayı üretme

var number;

function randomNumber() {
  number = Math.floor(Math.random() * 11);
  console.log(number);
}
randomNumber();

//girilen sayının doğruluğunu kontrol etme

var btnFound = document.getElementById("found");

btnFound.onclick = function () {
  var numb = document.getElementById("setNumb");

  if (number == numb.value) {
    document.getElementById("win").innerHTML = "Sayıyı Buldunuz !";
  } else {
    document.getElementById("win").innerHTML = "Tekrar Deneyiniz !";
  }
};

//sayıyı resetleme

var btnReset = document.getElementById("reset");

btnReset.onclick = function () {
  randomNumber();
};
