import React, { useEffect, useState } from "react";
import "./Contacts.scss";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";
import axios from "axios";
import Map from "../../components/map/UkraineMap/Map";
import MapCard from "../../components/map/MapCard/MapCard";
import useRecordVisit from "../../hooks/useRecordVisit";
const geoUrl =
  "https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/TopoJSON/europe.topojson";
const Contacts = () => {
const [cardData,setCardData] = useState(null)
useRecordVisit('Контакти')
console.log('CARDDATA',cardData);
useEffect(()=>{

},[cardData])
  return (
    <div className="contacts page">
      
      <div className="contacts__inner container">

        <div className="map">
            
        </div>
        <Map setCardData={setCardData} cardData={cardData} />
      </div>
      {cardData ? <MapCard cardData={cardData} setCardData={setCardData}/> : null}
    </div>
  );
};

export default Contacts;
