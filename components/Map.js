import React, { useState, } from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import Marker from '../components/Marker';

const TOKEN = 'pk.eyJ1IjoiYW5kcmVzbWljaGVsIiwiYSI6ImNqa3k2NGFsbzBmODYza21tcWo2NjdlcGUifQ.txk49vcGtXSpKyQOnPqiOQ';

export default function Map() {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 12
    });
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxApiAccessToken={TOKEN}
            onViewportChange={setViewport}
            {...viewport}
        >
            <div style={{ position: 'absolute', top: 20, right: 20 }}>
                <NavigationControl />
            </div>
            <Marker
                latitude={37.7577}
                longitude={-122.4376}
                color={'red'} />
            <Marker
                latitude={37.7677}
                longitude={-122.4376}
                color={'green'} />
            <Marker
                latitude={37.7777}
                longitude={-122.4376}
                color={'blue'} />
        </ReactMapGL>
    );
}
