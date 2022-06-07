calculate.onclick = function calculate() {
  let celsius = document.getElementById("celsius").value;
  let fahrenheit;

  fahrenheit = (celsius * 9) / 5 + 32;
  if (celsius <= 0) {
    document.getElementById("result").innerHTML =
      "celsius değeri 0'dan büyük olmalıdır.";
  } else {
    document.getElementById("result").innerHTML =
      celsius + " celsius = " + fahrenheit + " fahrenheit";
  }
};
