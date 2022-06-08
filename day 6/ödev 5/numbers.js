let userNumber = () => Number(prompt("Lütfen bir sayı giriniz"));

function numberProcess() {
  var val = userNumber();
  var sum = 0;
  var evenNumbers;
  var oddNumbers;
  var evenCount = 0;
  var oddCount = 0;
  var evenSum = 0;
  var oddSum = 0;

  if (val < 0) {
    alert("Girilen değer 0 dan küçük olamaz.");
  } else {
    for (let i = 1; i <= val; i++) {
      var count = val + 1; // kaç adet sayı olduğunu gösteren değer.

      if (val == 44) {
        alert("44 secretKey çıkış yapıldı");
        break;
      }

      if (i == 7) {
        alert("7 sayısı işlemlere dahil edilmeyecektir.");
        continue;
      }

      if (i >= 101) {
        //100 den büyük değer girildiğinde yani 105 yapıldığında, 5 kere daha tamam'a tıklanması gerekiyor.
        //alert("100 den büyük sayılar işleme dahil edilmeyecektir.");
        document.write(
          `100 den büyük sayılar işleme dahil edilmeyecektir.<br>`
        );
        continue;
      }

      sum += i; //sayıların toplamını yapan kısım.

      if (i % 2 === 0) {
        evenNumbers = i;
        document.write(" çift sayı => " + evenNumbers + " <br>");
        evenCount++;
        evenSum += i;
      } else if (i % 2 !== 0) {
        oddNumbers = i;
        document.write("tek sayı => " + oddNumbers + " - ");
        oddCount++;
        oddSum += i;
      }
    }

    evenCount = evenCount + 1; //sıfır çift sayıdır.

    document.write(
      "<br>" +
        "0 ile " +
        val +
        " arasında (0 ile " +
        val +
        " dahil) " +
        count +
        " sayı vardır." +
        "<br>"
    );
    document.write(
      "0 ile " + val + " arasında bulunan sayıların toplamı = " + sum + "<br>"
    );
    document.write(
      "0 ile " + val + " arasında " + evenCount + " çift sayı vardır." + "<br>"
    );
    document.write("Çift sayıların toplamı = " + evenSum + "<br>");
    document.write(
      "0 ile " + val + " arasında " + oddCount + " tek sayı vardır." + "<br>"
    );
    document.write("Tek sayıların toplamı = " + oddSum + "<br>");
  }
}

numberProcess();
