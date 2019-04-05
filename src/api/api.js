const baseApi = "http://api.openweathermap.org/data/2.5";
const appid = "afaedd5fc6ed5a94b810fe5da0c926b3";

export const getWeatherByCityName = cityName => {
  const settings = {
    method: "GET"
  };
  const api = `${baseApi}/weather?q=${cityName}&appid=${appid}`;
  return fetch(api, settings)
    .then(res => res.json())
    .then(function(data) {
      return data;
    })
    .catch(e => console.log(e));
};
export const getWeatherByCityId = id => {
  const settings = {
    method: "GET"
  };
  const api = `${baseApi}/weather?id=${id}&appid=${appid}`;
  return fetch(api, settings)
    .then(res => res.json())
    .then(function(data) {
      return data;
    });
};
