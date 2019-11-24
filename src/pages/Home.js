import React, { useEffect, useState } from "react";
import axios from "axios";
import { key, API, getAQIColor } from "../config";
 
import { Air, Weather } from "../components";
const Home = () => {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [air, setAir] = useState("");
  const [weather, setWeater] = useState({});
  const [backgroud, setBackground] = useState("");

  const getWeatherAndAir = async (lat, long) => {
    const result = await axios.get(API(lat, long, key));
    return result;
  };

  const getLocation = () =>
    new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          result => {
            const { latitude, longitude } = result.coords;
            resolve({ latitude, longitude });
          },
          error => reject(error)
        );
      } else {
        alert("getGeolocation is not supported by this browser.");
      }
    });

  const setApiData = async () => {
    const { latitude, longitude } = await getLocation();
    const result = await getWeatherAndAir(latitude, longitude);
    const {
      city,
      country,
      current: {
        pollution: { aqius },
        weather: { tp, ic }
      }
    } = result.data.data;

    setLocation({ city, country });
    setAir(aqius);
    setWeater({ tp, ic });
    setBackground(getAQIColor(air));
  };

  useEffect(() => {
    setApiData();
  }, []);

  return (
    <div className="home-containner">
      <h2 style={{ textAlign: "center", padding: "20px" }}>
        AIR QUALITY AND WEATHER <br />
        FROM YOUR LOCATION
      </h2>
      <div
        className="home-inner"
        style={{
          background: `linear-gradient(to left bottom, white, ${backgroud})`
        }}
      >
        <Weather location={location} weather={weather} />
        <Air air={air} />
      </div>
    </div>
  );
};

export default Home;
