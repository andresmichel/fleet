import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoiYW5kcmVzbWljaGVsIiwiYSI6ImNqa3k2NGFsbzBmODYza21tcWo2NjdlcGUifQ.txk49vcGtXSpKyQOnPqiOQ'

export default function Map() {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken={TOKEN}
            onViewportChange={setViewport}
            {...viewport}
        />
    );
}
