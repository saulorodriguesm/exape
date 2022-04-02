function findZodiac() {
  var zyear = document.getElementById("zodiac-year").value;
  var zmonth = document.getElementById("zodiac-month").value;
  var zday = document.getElementById("zodiac-day").value;
  var zname = document.getElementById("zodiac-name").value;

  if ((zmonth == 1 && zday >= 20) || (zmonth == 2 && zday <= 18)) {
    sign = "Aquário";
  }
  if ((zmonth == 2 && zday >= 19) || (zmonth == 3 && zday <= 20)) {
    sign = "Peixes";
  }
  if ((zmonth == 3 && zday >= 21) || (zmonth == 4 && zday <= 19)) {
    sign = "Áries";
  }
  if ((zmonth == 4 && zday >= 20) || (zmonth == 5 && zday <= 20)) {
    sign = "Touro";
  }
  if ((zmonth == 5 && zday >= 21) || (zmonth == 6 && zday <= 21)) {
    sign = "Gêmeos";
  }
  if ((zmonth == 6 && zday >= 22) || (zmonth == 7 && zday <= 22)) {
    sign = "Câncer";
  }
  if ((zmonth == 7 && zday >= 23) || (zmonth == 8 && zday <= 22)) {
    sign = "Leão";
  }
  if ((zmonth == 8 && zday >= 23) || (zmonth == 9 && zday <= 22)) {
    sign = "Virgem";
  }
  if ((zmonth == 9 && zday >= 23) || (zmonth == 10 && zday <= 22)) {
    sign = "Libra";
  }
  if ((zmonth == 10 && zday >= 23) || (zmonth == 11 && zday <= 21)) {
    sign = "Escorpião";
  }
  if ((zmonth == 11 && zday >= 22) || (zmonth == 12 && zday <= 21)) {
    sign = "Sagitário";
  }
  if ((zmonth == 12 && zday >= 22) || (zmonth == 1 && zday <= 19)) {
    sign = "Capricórnio";
  }

  if (sign === "Câncer" || sign === "Escorpião" || sign === "Peixes") {
    var element = "Água";
  }
  if (sign === "Áries" || sign === "Leão" || sign === "Sagitário") {
    var element = "Terra";
  }
  if (sign === "Touro" || sign === "Virgem" || sign === "Capricórnio") {
    var element = "Fogo";
  }
  if (sign === "Gêmeos" || sign === "Libra" || sign === "Aquário") {
    var element = "Ar";
  }
  document.getElementById("post-name").append(zname);
  document.getElementById("post-day").append(zday);
  document.getElementById("post-month").append(zmonth);
  document.getElementById("post-year").append(zyear);
  document.getElementById("post-sign").append(sign);
  document.getElementById("post-element").append(element);
  document.getElementById("c-alert").classList.remove("d-none")
}

var zodiacButton = document.getElementById("zodiac-submit");
zodiacButton.addEventListener("click", findZodiac);
