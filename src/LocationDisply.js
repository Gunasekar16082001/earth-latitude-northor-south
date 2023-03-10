import React from "react";

function LocationDisply({ latitude }) {
  var region = latitude > 0 ? "North" : "South";
  return <div>Hii ur currently in {region} region</div>;
}

export default LocationDisply;
 