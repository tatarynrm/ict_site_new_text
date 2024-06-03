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
const geoUrl =
  "https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/TopoJSON/europe.topojson";
const Contacts = () => {
const [cardData,setCardData] = useState(null)
  return (
    <div className="contacts page">
      
      <div className="contacts__inner container">

        <div className="map">
            
        </div>
        <Map setCardData={setCardData} cardData={cardData} />
      </div>
      {cardData && <MapCard setCardData={setCardData}/>}
    </div>
  );
};

export default Contacts;
