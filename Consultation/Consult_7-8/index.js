const USER_AVATAR = document.querySelector(".user-avatar");
const USER_NAME = document.querySelector(".user-name");
const USER_PHONE = document.querySelector(".user-phone");
const USER_CITY = document.querySelector(".user-city");
const GET_USER_BUTTON = document.querySelector(".get-user");
const RANDOM_USER_URL = "https://randomuser.me/api/";

const initialUserName = USER_NAME.textContent;
const initialUserCity = USER_CITY.textContent;
const initialUserPhone = USER_PHONE.textContent;

const getUser = async () => {

  USER_NAME.textContent = initialUserName;
  USER_CITY.textContent = initialUserCity;
  USER_PHONE.textContent = initialUserPhone;

  const response = await fetch(RANDOM_USER_URL);
  console.log(response);
  const result = await response.json();
  console.log(result); 
  
  if (response.ok) {
    const nameObject = result.results[0].name;
    const fullName = `${nameObject.title} ${nameObject.first} ${nameObject.last}`;
    
    USER_AVATAR.setAttribute("src", result.results[0].picture.medium);
    USER_NAME.textContent = `${USER_NAME.textContent} ${fullName}`;
    USER_CITY.textContent = `${USER_CITY.textContent} ${result.results[0].location.city}`
    USER_PHONE.textContent = `${USER_PHONE.textContent} ${result.results[0].phone}`;
    
    // тут прописываем логику когда промис вернул нормальные(ожидаемые) данные с сервера. т.е promiseStatus === "fulfilled"
  } else {
    // тут прописываем логику когда промис вернул ошибку с сервера. т.е promiseStatus === "rejected"
  }
};
GET_USER_BUTTON.addEventListener("click", getUser);

