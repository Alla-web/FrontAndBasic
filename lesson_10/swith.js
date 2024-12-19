let temperature = Number(prompt("Enter your current air temperature"));
let season;

switch (true) {
  case temperature < 0 && temperature >= -50:
    season = "winter";
    alert("It's winter here");
    break;
  case temperature > 5 && temperature <= 10:
    season = "spring";
    alert("It's spring here");
    break;
  case temperature >= 11 && temperature <= 50:
    season = "summer";
    alert("It's summer here");
    break;
  case temperature >= 0 && temperature <= 5:
    season = "autumn";
    alert("It's autumn here");
    break;
  default:
    alert("Wrong temperatyre");
    break;
}

alert(season);
