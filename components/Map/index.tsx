"use client";
import L, { Icon } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

interface MapProps {
  coordinates: { lat: number; lng: number };
}

const Map: React.FC<MapProps> = ({ coordinates }) => {
  const [isClient, setIsClient] = useState(false);
  const [isSatellite, setIsSatellite] = useState(false);

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149059.png",
    iconSize: [36, 36],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const tileUrlNormal = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const tileUrlSatellite =
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const ToggleMapControl = () => {
    const map = useMap();
    useEffect(() => {
      const button = L.DomUtil.create(
        "button",
        "leaflet-bar leaflet-control leaflet-control-custom"
      );
      button.style.backgroundColor = "white";
      button.style.border = "none";
      button.style.padding = "6px";
      button.style.cursor = "pointer";
      button.style.fontSize = "14px";
      button.innerHTML = isSatellite ? "🌍 Modo mapa" : "📡 Modo satélite";
      button.style.position = "absolute";
      button.style.top = "10px";
      button.style.right = "10px";
      button.style.zIndex = "1000";

      button.onclick = () => {
        setIsSatellite((prev) => !prev);
        map.eachLayer((layer) => {
          if (layer instanceof L.TileLayer) {
            layer.setUrl(isSatellite ? tileUrlNormal : tileUrlSatellite);
          }
        });
      };

      map.getContainer().appendChild(button);
      return () => {
        map.getContainer().removeChild(button);
      };
    }, [map]);

    return null;
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={coordinates}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url={isSatellite ? tileUrlSatellite : tileUrlNormal}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinates} icon={customIcon}>
          <Popup>
            Localização: {coordinates.lat}, {coordinates.lng}
          </Popup>
        </Marker>
        <ToggleMapControl />
      </MapContainer>
    </div>
  );
};

export default Map;
