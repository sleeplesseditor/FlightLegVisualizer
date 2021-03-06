import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import DeckGL, { ArcLayer } from "deck.gl";
import "mapbox-gl/dist/mapbox-gl.css";
import arcs from "../data/arcs.json";

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
        >
            <DeckGL
                {...viewport}
                layers={[
                    new ArcLayer({
                    id: "flight-arcs",
                    data: arcs,
                    getSourcePosition: d => d.source,
                    getTargetPosition: d => d.target,
                    getSourceColor: () => [255, 0, 0, 120],
                    getTargetColor: () => [0, 255, 0, 120],
                    getStrokeWidth: () => 2
                    })
                ]}
            />
        </ReactMapGL>
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