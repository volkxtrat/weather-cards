export const degreesKelvinToCelsius = kalvin => {
  return (kalvin - 273.15).toFixed(1);
};
export const degreesKelvinToFahrenheit = kalvin => {
  return ((kalvin - 273.15) * 1.8 + 32).toFixed(1);
};

export const getDegrees = (kelvin, degrees) => {
  switch (degrees) {
    case "C": {
      return degreesKelvinToCelsius(kelvin) + "ºC";
    }
    case "F": {
      return degreesKelvinToFahrenheit(kelvin) + "ºF";
    }
    default: {
      return kelvin + "ºK";
    }
  }
};

export const getWeatherDetailInfo = (weatherCard, degrees) => {
  const mapDetailInfo = [
    {
      key: "Temperature",
      value: getDegrees(weatherCard.main.temp, degrees),
      icon: "fas fa-temperature-low"
    },
    {
      key: "Minimum temperature",
      value: getDegrees(weatherCard.main.temp_min, degrees),
      icon: "fas fa-temperature-low"
    },
    {
      key: "Maximum temperature",
      value: getDegrees(weatherCard.main.temp_max, degrees),
      icon: "fas fa-temperature-low"
    },
    {
      key: "Humidity",
      value: weatherCard.main.humidity + "%",
      icon: "fas fa-water"
    },
    {
      key: "Atmospheric pressure",
      value: weatherCard.main.pressure + " hPa",
      icon: "fas fa-wind"
    }
  ];
  if (weatherCard.wind) {
    mapDetailInfo.push({
      key: "Wind speed",
      value: weatherCard.wind.speed + " m/s",
      icon: "fas fa-wind"
    });
    mapDetailInfo.push({
      key: "Wind direction",
      value: weatherCard.wind.speed + "º",
      icon: "fas fa-wind"
    });
  }
  if (weatherCard.clouds.all) {
    mapDetailInfo.push({
      key: "Cloudiness",
      value: weatherCard.clouds.all + "%",
      icon: "fas fa-cloud"
    });
  }
  if (weatherCard.rain) {
    weatherCard.rain["1h"] &&
      mapDetailInfo.push({
        key: "Rain volume for the last 1 hour, mm",
        value: weatherCard.rain["1h"],
        icon: "fas fa-cloud-rain"
      });
    weatherCard.rain["3h"] &&
      mapDetailInfo.push({
        key: "Rain volume for the last 3 hours, mm",
        value: weatherCard.rain["3h"],
        icon: "fas fa-cloud-rain"
      });
  }

  if (weatherCard.snow) {
    weatherCard.snow["1h"] &&
      mapDetailInfo.push({
        key: "Snow volume for the last 1 hour, mm",
        value: weatherCard.snow["1h"],
        icon: "fas fa-snowflake"
      });
    weatherCard.snow["1h"] &&
      mapDetailInfo.push({
        key: "Snow volume for the last 3 hours, mm",
        value: weatherCard.snow["3h"],
        icon: "fas fa-snowflake"
      });
  }

  return mapDetailInfo;
};

export const getWeatherIcon = icon => {
  switch (icon) {
    case "11d": {
      return "fas fa-bolt";
    }
    case "11n": {
      return "fas fa-bolt";
    }
    case "09d": {
      return "fas fa-cloud-showers-heavy";
    }
    case "09n": {
      return "fas fa-cloud-showers-heavy";
    }
    case "10d": {
      return "fas fa-cloud-sun-rain";
    }
    case "10n": {
      return "fas fa-cloud-moon-rain";
    }
    case "13d": {
      return "fas fa-cloud-meatball";
    }
    case "13n": {
      return "fas fa-cloud-meatball";
    }
    case "50d": {
      return "fas fa-smog";
    }
    case "50n": {
      return "fas fa-smog";
    }
    case "01d": {
      return "fas fa-sun";
    }
    case "01n": {
      return "fas fa-moon";
    }
    case "02d": {
      return "fas fa-sun";
    }
    case "02n": {
      return "fas fa-moon";
    }
    case "03d": {
      return "fas fa-cloud-sun";
    }
    case "03n": {
      return "fas fa-cloud-moon";
    }
    case "04d": {
      return "fas fa-cloud";
    }
    case "04n": {
      return "fas fa-cloud";
    }

    default: {
      return "fas fa-sun";
    }
  }
};
