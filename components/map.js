"use client"

import React from 'react'
import { GoogleMap, useJsApiLoader, InfoWindowF, MarkerF } from '@react-google-maps/api';
import testbox from "@/images/bluetextbox.png"

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 46.811943,
  lng: -71.205002
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCd42SmBhN7GGb4zNQoSa1PZFkaYjQ569E"
  })

  const [map, setMap] = React.useState(null)
  const [selected, setSelected] = React.useState(false)

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])




  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerF
          key={`${center.lat}-${center.lng}`}
          position={{
            lat: center.lat,
            lng: center.lng
          }}
          onClick={ () => {
            setSelected(true)
          }}
        />
        {selected && <InfoWindowF
          position={{
            lat: center.lat,
            lng: center.lng
          }}
          zIndex={1}
          onCloseClick={()=> {
            setSelected(false)
          }}
        >
            <div>
              <h3>QUEBEC STORE ⚜️</h3>
              <p>Come and visite us</p>
            </div>
        </InfoWindowF>}

        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)
