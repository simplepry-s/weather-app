import React from "react";
import PropsTypes from "prop-types";
 
const Weather = props => {
  const {
    weather: { tp, ic },
    location: { city, country }
  } = props;
  return (
    <div className="weather-head">
      <div className="weather-location">{city},{country}</div>
      <div className="weather-icon">
        <span>{tp}°C</span>

        {ic ? (
          <img
            src={require(`../icon/${ic}.png`)}
            height={"50px"}
            width={"50px"}
            style={{padding:'5px'}}
          />
        ) : null}
      </div>
    </div>
  );
};

Weather.propsTypes = {
  weather: PropsTypes.shape({
    tp: PropsTypes.string.isRequired,
    ic: PropsTypes.string.isRequired
  }),
  location: PropsTypes.shape({
    city: PropsTypes.string.isRequired,
    country: PropsTypes.string.isRequired
  })
};
export default Weather;
