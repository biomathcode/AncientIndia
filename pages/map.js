import React, { useState } from "react";
import India from "./map/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import { getLocationId, getLocationName } from "./map/utils";

export default function MapPage() {
  const [pointedLocation, setPointed] = useState(null);
  const [focusedLocation, setFocused] = useState(null);
  const [clickedLocation, setClicked] = useState(null);

  const links = {
    an: "/map/AndamanAndNicobarIslands",
    ap: "/map/AndraPradesh",
    ar: "/map/ArunachalPradesh",
    as: "/map/Assam",
    br: "/map/Bihar",
    ch: "/map/Chandigarh",
    ct: "/map/Chattisgarh",
    dn: "/map/DadraAndNagarHaveli",
    dd: "/map/DamanAndDiu",
    dl: "/map/Delhi",
    ga: "/map/Goa",
    gj: "/map/Gujarat",
    hr: "/map/Haryana",
    hp: "/map/HimachalPradesh",
    jk: "/map/JammuAndKashmir",
  };
  const handleLocationClick = (e) => {
    const clickedLocation = getLocationName(e);
    const clickedLocationId = getLocationId(e);
    setClicked(clickedLocation);
    window.open(links[clickedLocationId], "_self");
  };

  return (
    <div>
      <h2 className="text-grey-600">Click on the state to know more...</h2>
      <SVGMap
        className="stroke-current stroke-1 text-grey-600 dark:text-white"
        onLocationClick={(e) => handleLocationClick(e)}
        map={India}
      />
    </div>
  );
}
