"use client";

import { ArcgisScene } from "@arcgis/map-components-react";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
import { useEffect } from "react";

export default function MapViewer() {
  useEffect(() => {
    console.debug("Initializing Map Viewer");
    defineMapElements(window, {
      resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets",
    });
  }, []);

  return (
    <ArcgisScene
      basemap="topo-vector"
      camera={{
        position: [-95, 40, 6_000_000],
        tilt: 0,
      }}
    />
  );
}
