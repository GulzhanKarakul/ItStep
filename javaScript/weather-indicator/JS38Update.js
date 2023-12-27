const log = console.log;

let inputs= document.querySelectorAll('input');
const cityList =document.querySelector('.fade-away');

const xhr = new XMLHttpRequest();
const geoKey = 'c1bdc24a458a48e1b4bbcb1c2534e255';

inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        let text = input.value;
        log(text);

        xhr.open('get', "https://api.geoapify.com/v1/geocode/autocomplete?text="+text+"&format=json&apiKey=" + geoKey, true);
        xhr.send();
    });
});


xhr.onreadystatechange = (ev)=>{
    if(xhr.status === 200){
        if(xhr.readyState ===xhr.DONE){
            let result = JSON.parse(xhr.response);
            log(result);
            const country = inputs[0].value;
            log(country);

            for(let x of result.results){  
                    let item = document.createElement('li');

                    let nameResult = document.createElement('h4');
                    nameResult.textContent = x.city;

                    let countryResult = document.createElement('p');
                    countryResult.textContent = x.country;

                    item.append(nameResult);
                    item.append(countryResult);

                    cityList.append(item);
            }

            const liesOfCities = cityList.querySelectorAll('li');
    
            liesOfCities.forEach( li => {
                li.addEventListener('click', () => {
                    let country = li.querySelector('p').textContent;
                    let city = li.querySelector('h4').textContent;
                    if(inputs[0].value == country){
                        inputs[1].value = city;
                    }
                    
                    inputs[0].value = country;
                    inputs[1].value = city;

                    cityList.innerHTML = '';
                });
            });
        }
    }

    inputs.forEach(input => {
        input.addEventListener('keydown', () => {
            cityList.innerHTML = '';
        });
    });
}


let btn = document.getElementById('search');
const weatherList = document.querySelector('.display');
const weatherDiv = document.querySelector('.weather');

const xhrWeather = new XMLHttpRequest();
const keyWeather = '7fb9c01e51ad4223a93101522230905';

btn.onclick = () => {
    if(document.querySelector('.current-weather')){
        weatherList.innerHTML = '';
        const currentWeatherDiv = document.querySelector('.current-weather');
        currentWeatherDiv.remove();
    }
    if(document.querySelector('.location')){
        const locationDiv = document.querySelector('.location');
        locationDiv.remove();
    }
    
    let searchValue = document.querySelectorAll('input')[1].value;

    xhrWeather.open('get', `http://api.weatherapi.com/v1/forecast.json?key=${keyWeather}&q=${searchValue}&days=10&aqi=no&alerts=no&lang=ru`, true);
    xhrWeather.send();
}

xhrWeather.onreadystatechange = (ev)=>{
    if(xhrWeather.status === 200){
        if(xhrWeather.readyState ===xhrWeather.DONE){
            let result = JSON.parse(xhrWeather.response);
            log(result);

            let hTwoForLocation = document.createElement('h2');
            hTwoForLocation.className = 'location';
            hTwoForLocation.textContent = 'Location: ' + inputs[1].value + ' ' + inputs[0].value;

            let currentWeatherDiv = document.createElement('div');
            currentWeatherDiv.className = 'current-weather';

            let curIcon = document.createElement('img');
            curIcon.src = 'https:' + result.current.condition.icon;

            let curDate = document.createElement('p');
            curDate.textContent = result.current.last_updated;

            let curName = document.createElement('h3');
            curName.textContent = result.current.condition.text;

            let curTempMax = document.createElement('p');
            curTempMax.textContent = 'Current temperature: ' + result.current.temp_c + ' C';

            currentWeatherDiv.append(curIcon);
            currentWeatherDiv.append(curDate);
            currentWeatherDiv.append(curName);
            currentWeatherDiv.append(curTempMax);

            weatherDiv.prepend(currentWeatherDiv);
            weatherDiv.prepend(hTwoForLocation);

            for(let x of result.forecast.forecastday){
                let item = document.createElement('li');

                let icon = document.createElement('img');
                icon.src = 'https:' + x.day.condition.icon;

                let date = document.createElement('p');
                date.textContent = x.date;

                let name = document.createElement('h3');
                name.textContent = x.day.condition.text;

                let tempMax = document.createElement('p');
                tempMax.textContent = 'Maximum temperature: ' + x.day.maxtemp_c
                + ' C';

                let tempMin = document.createElement('p');
                tempMin.textContent = 'Minimum temperature: ' + x.day.mintemp_c
                + ' C';

                item.append(icon);
                item.append(date);
                item.append(name);
                item.append(tempMax);
                item.append(tempMin);

                weatherList.append(item);
            }
        }
    }
}
