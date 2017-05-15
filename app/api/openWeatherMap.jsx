import axios from 'axios'

const OPEN_WEATHER_MAP_URL = 'https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?appid=4d67d2527e9a42b3763b81c7fa44a928&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then( function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error('Error: '+res.response.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error('Error: '+ res.response.data.message);
    });
  }
}
