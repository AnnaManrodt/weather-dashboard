//to do 1 fetch the data from the api 
//to do 2 split the url and insert what ever the search city is 
// to do 3 save each searched city to local storage and dsiplay in the 
//to do 4 display the focast for today bigger
//to do 5 i need to display the city nam ethe date and an icon representation of the weather, also (in a list i need to display the temp wind speed and himidity)
//to do 6 dispaly the focast for five days 
// to do 7 when i click on the city in the search history it gives me al the info again 

//1 look at the api and get the fetch stuff 
function getForecast(city) {



  // const key = "c5edf1bc21a7c8526337b5648c442ab2"

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3bda48b58f2ad714f08c2ecf5963d4b1`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#displayForcast").textContent = "";
      //a fro loop that loops through the results gathering one form each day
      for (let i = 4; i < data.list.length; i += 8) {
        let weatherContainer = document.createElement("div");
        let dateContainer = document.createElement("h2");
        let windSpeedContainer = document.createElement('p');
        let tempContainer = document.createElement('p');
        let humiContainer = document.createElement('p');

        //add classes for stylying 
        dateContainer.classList.add('forecastDate');
        windSpeedContainer.classList.add('windSpeed');
        tempContainer.classList.add('temp');
        humiContainer.classList.add('humi');
        weatherContainer.classList.add('weatherContainerClass')


        dateContainer.textContent = data.list[i].dt_txt;
        windSpeedContainer.textContent = `windspeed: ${data.list[i].wind.speed}`;
        tempContainer.textContent = `temp: ${data.list[i].main.temp}`;
        humiContainer.textContent = `humidity: ${data.list[i].main.humidity}`;
        //temp cont .classList("  ")


        weatherContainer.appendChild(dateContainer);
        weatherContainer.appendChild(windSpeedContainer);
        weatherContainer.appendChild(tempContainer);
        weatherContainer.appendChild(humiContainer);

        document.querySelector("#displayForcast").appendChild(weatherContainer);
        console.log(data.list[i])
      }
    })
}


let searchButton = document.querySelector(".submit");
let searches = [];

searchButton.addEventListener('click', function (event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;

  getForecast(city);
  saveSearch(city);
})

// Save search function that saves the city and appends it to the page

function saveSearch(city) {
  searches.push(city);

  let saveSearch = document.getElementById('saveSearch');
  saveSearch.innerHTML = '';

  searches.forEach(search => {
    const li = document.createElement('li');
    li.textContent = search;
    li.addEventListener('click', function () {
      getForecast(search);
    });
    let searchCont = document.querySelector('.searchCont')
    li.classList.add('btn', 'btn-outline-info')
    saveSearch.appendChild(li);
    searchCont.appendChild(saveSearch)
  });
}
;


//second api call to get current weather function called get weather, that call current weather and dsipays it. same link expect forecast is repalced with current 

