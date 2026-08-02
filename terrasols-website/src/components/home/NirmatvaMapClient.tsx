"use client";

import { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";
import { farmSites, type FarmSite } from "@/lib/farms-data";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function NirmatvaMapClient() {
  const [selected, setSelected] = useState<FarmSite | null>(null);

  if (!MAPBOX_TOKEN) {
    return null;
  }

  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{ latitude: 21.9, longitude: 76.2, zoom: 7.3 }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      style={{ width: "100%", height: "100%" }}
    >
      <NavigationControl position="top-right" />
      {farmSites.map((farm) => (
        <Marker
          key={farm.id}
          latitude={farm.lat}
          longitude={farm.lng}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setSelected(farm);
          }}
        >
          <button aria-label={farm.name} className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute h-4 w-4 animate-pulse-glow rounded-full bg-growth-green/60" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-carbon-teal ring-2 ring-soil-black" />
          </button>
        </Marker>
      ))}

      {selected && (
        <Popup
          latitude={selected.lat}
          longitude={selected.lng}
          onClose={() => setSelected(null)}
          closeOnClick={false}
          offset={12}
        >
          <div className="p-1 text-sm">
            <p className="flex items-center gap-1 font-semibold text-text-primary">
              <MapPin className="h-3.5 w-3.5 text-growth-green" /> {selected.name}
            </p>
            <p className="mt-1 text-text-muted">
              {selected.village}, {selected.district}
            </p>
            <p className="mt-1 text-text-secondary">
              {selected.hectares} ha &middot; {selected.tonnesCO2} t CO₂ removed
            </p>
          </div>
        </Popup>
      )}
    </Map>
  );
}
