import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const API_TOKEN = require('./config.js').MAPBOX_TOKEN;

const Index = () => {
    const [viewport, setViewport] = useState({
      height: "100%",
      width: "100%"
    });
  
    return (
      <div className="root">
        <ReactMapGL
          {...viewport}
          onViewportChange={newViewport => setViewport(newViewport)}
          mapboxApiAccessToken={API_TOKEN}
          mapStyle="mapbox://styles/mapbox/light-v9"
        />
        <style jsx>
          {`
            .root {
              position: absolute;
              top: 0;
              left: 0;
              height: 100vh;
              width: 100vw;
            }
          `}
        </style>
      </div>
    );
  };
  
  export default Index;