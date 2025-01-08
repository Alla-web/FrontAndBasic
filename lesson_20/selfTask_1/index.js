const GET_BUTTON = document.querySelector(".getButton");
const RESULT_CONTAINER = document.querySelector(".result-container");
const COUNTRY_INPUT = document.querySelector(".country");
const FLAG_IMG = document.querySelector(".flag");

const getCountryInfo = async () => {
  //-------------------------------------------
  console.clear();
  RESULT_CONTAINER.innerHTML = "";
  RESULT_CONTAINER.classList.remove("error");
  //-------------------------------------------

  let country = COUNTRY_INPUT.value.trim();
  const URL = `https://restcountries.com/v3.1/name/${country}`;

  if (country === "") {
    alert("Enter coutry");
    return;
  }

  try {
    const responce = await fetch(URL);
    console.log(responce);

    const result = await responce.json();
    console.log(result);

    if (responce.ok === false || responce.status === 404 || !result[0]) {
      throw new Error(`HTTP error ${responce.status}. Resorce not found`);
    }

    if (responce.ok) {
      const currencyKey = Object.keys(result[0].currencies)[0];
      const currencyName = result[0].currencies[currencyKey].name;
      const currencySymbol = result[0].currencies[currencyKey].symbol;

      RESULT_CONTAINER.innerHTML = `
            <img src="${
              result[0].flags.png
            }" alt="Flag" height=50px>            
            <img src="${
              result[0].coatOfArms.png
            }" alt="Coat of Arms" height=60px>    
            <a href="${
              result[0].maps.googleMaps
            }" target="_blank">View Google Map</a>             
            <p><b>Region:</b> ${result[0].region}</p>
            <p><b>Continent:</b> ${result[0].continents[0]}</p>
            <p><b>Capital:</b> ${result[0].capital}</p>
            <p><b>Language:</b> ${Object.values(result[0].languages)[0]}</p>
            <p><b>Currency:</b> ${currencyKey} (${currencyName}, ${currencySymbol})</p>                        
            <p><b>Car trafic:</b> ${result[0].car.side}</p>
            <p><b>Start of Week:</b> ${result[0].startOfWeek}</p>
            <p><b>Postalcode format:</b> ${
              result[0].postalCode.format
            }</p>            
            `;
    }

    if (result[0].borders) {
      RESULT_CONTAINER.innerHTML += `
        <p><b>Bordering countries:</b> ${result[0].borders
          .map((border) => `${border}`)
          .join(", ")}</p>
        `;
    } else {
      RESULT_CONTAINER.innerHTML += `
        <p><b>Bordering countries:</b> none </p>
        `;
    }
  } catch (error) {
    RESULT_CONTAINER.innerHTML = `${error.message}`;
    RESULT_CONTAINER.classList.add("error");
  } finally {
  }
};

GET_BUTTON.addEventListener("click", getCountryInfo);
