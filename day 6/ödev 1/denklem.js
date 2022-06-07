calculate.onclick = function calculate() {
  let xValue = document.getElementById("xValue").value;
  let kValue = document.getElementById("kValue").value;
  let yValue;
  console.log(xValue, kValue, yValue);

  yValue = xValue * 3 + kValue * 4;

  document.getElementById("result").innerHTML = "y değeri = " + yValue;
};
