finds.onclick = function finder() {
  let val = document.getElementById("val").value;
  if (val < 0) {
    document.getElementById("result").innerHTML = val + " sayısı negatif. ";
  } else if (val > 0) {
    document.getElementById("result").innerHTML = val + " sayısı pozitif. ";
  } else {
    document.getElementById("result").innerHTML = ":) 0 (:";
  }
};
