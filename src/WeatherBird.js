import React from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

export default function WeatherBird(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }

  const apiKey = `21d20dbb06095f793410f891f00e7748`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <TailSpin
      height="80"
      width="80"
      radius="9"
      color="lightblue"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );
}
