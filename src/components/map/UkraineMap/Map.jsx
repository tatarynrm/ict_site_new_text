import React, { useEffect, useState } from "react";
import styles from "./Map.module.scss";
import Region from "./Region";
import { regions } from "../../../data/region";
import axios from "axios";
import { API_KEY } from "../../../constants/service_constants";

const Map = ({ cardData, setCardData }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://alerts.com.ua/api/states", {
        // Налаштування Axios для механізму polling

        headers: {
          "X-API-Key": API_KEY,
        },
      });
      setData(result.data.states);
    };

    fetchData();
    // Встановлюємо інтервал для виклику fetchData() кожні 10 секунд
    const intervalId = setInterval(fetchData, 20000);

    // Зупиняємо механізм polling при розміщенні компонента
    return () => clearInterval(intervalId);
  }, []);
  console.log(data);
  return (
    <div className={styles.map}>
      <svg
        viewBox="0 0 1000 670"
        fill={"blue"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="map">
          {regions?.map((region, idx) => {
            // const alarms = data?.states?.filter(alert => alert === true)
            const alertStates = data.filter((item) => item.alert === true);
            const alarmRegion = alertStates?.find(
              (alarmRegion) => alarmRegion.id === region.id
            );

            // !alarmRegion ? (region.fill = "#008080") : (region.fill = "red");
            !alarmRegion ? (region.fill = "#207180") : (region.fill = "red");

            return (
              <Region
              
                cardData={cardData}
                setCardData={setCardData}
                key={idx}
                region={region}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default Map;
