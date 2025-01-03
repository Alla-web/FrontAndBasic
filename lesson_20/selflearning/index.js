const DECREASE_BUTTON = document.getElementById("decrease-button");
const INCREASE_BUTTON = document.getElementById("increase-button");
const INPUT = document.querySelector(".input");
const RESULTS_CONTAINER = document.querySelector(".results-container");

const getInfo = async () => {
  const countryCode = "UKR";
  const indicator = "FP.CPI.TOTL.ZG"; //инфляция

  const population = "SP.POP.TOTL"; //общее население
  const GDP = "NY.GDP.PCAP.CD"; //ВВП на душу населения
  const adultLiteracyRate = "SE.ADT.LITR.ZS"; //Уровень грамотности взрослых
  const lifeExpectancy = "SP.DYN.LE00.IN"; //Ожидаемая продолжительность жизни
  const accessToCleanWater = "SH.H2O.SAFE.ZS"; //Доступ к чистой воде (% населения)
  const forestCover = "AG.LND.FRST.ZS"; //Лесной покров (% территории)
  const unemploymentRate = "SL.UEM.TOTL.ZS"; //Уровень безработицы
  const laborForceParticipationRate = "SL.TLF.CACT.ZS"; //Доля рабочей силы
  const acceesToInternet = "IT.NET.USER.ZS"; //Доступ к интернету (% населения)
  const mobileSubscriptions = "IT.CEL.SETS"; //Количество пользователей мобильных телефонов

  const year = parseInt(INPUT.value);
  console.log(year);
  const URL = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?date=${year}&format=json`;

  try {
    //-------очистки-------------------------
    console.clear();
    RESULTS_CONTAINER.classList.remove("error");
    //-------очистки-------------------------

    if (isNaN(year)) {
      throw new Error("Please, enter year");
      return;
    }
    const responce = await fetch(URL);
    console.log(responce);
    const result = await responce.json();
    console.log(result);

    if (!result[1] || !result[1][0] || result[1][0].value === null) {
      throw new Error("No data available for the provided year");
    }

    if (responce.ok) {
      RESULTS_CONTAINER.innerHTML = `
        <div>Year: ${result[1][0].date}</div>
        <div>Country: ${result[1][0].country.value}</div>
        <div>Country ID: ${result[1][0].country.id}</div>
        <div>Country CODE: ${result[1][0].countryiso3code}</div>
        <div>${result[1][0].indicator.value}: ${result[1][0].value.toFixed(3)}</div>
        `;
    } else {
      throw new Error(`Error: ${responce.status}, ${responce.statusText}`);
      alert("Something went wrong");
    }
  } catch (error) {
    if (isNaN(year)) {  //|| !result[1] || !result[1][0]
      INPUT.value = "";
    }

    RESULTS_CONTAINER.innerHTML = `
    <div>Error: ${error.message}</div>
    `;
    RESULTS_CONTAINER.classList.add("error");
  } finally {
  }
};

DECREASE_BUTTON.addEventListener("click", () => {
  let currentValue = parseInt(INPUT.value);
  INPUT.value = currentValue - 1;
  getInfo();
});

INCREASE_BUTTON.addEventListener("click", () => {
  let currentValue = parseInt(INPUT.value);
  INPUT.value = currentValue + 1;
  getInfo();
});

INPUT.addEventListener("change", getInfo);
