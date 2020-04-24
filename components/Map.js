import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import Marker from '../components/Marker';

const TOKEN = 'pk.eyJ1IjoiYW5kcmVzbWljaGVsIiwiYSI6ImNqa3k2NGFsbzBmODYza21tcWo2NjdlcGUifQ.txk49vcGtXSpKyQOnPqiOQ';

export default function Map() {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 15
    });
    const [markers, setMarkers] = useState([]);
    async function fetchLocations() {
        try {
            const response = await fetch('/api/get');
            let { items } = await response.json();
            items = items.slice(items.length - 1, items.length);
            setMarkers(items);
            setViewport({ ...viewport, latitude: items[0].latitude, longitude: items[0].longitude })
        } catch (error) {
            console.log(error)
        }
    }
    function fetchLocationsEvery() {
        fetchLocations()
        setTimeout(fetchLocationsEvery, 5000);
    }
    useEffect(() => {
        fetchLocationsEvery();
    }, []);
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxApiAccessToken={TOKEN}
            onViewportChange={setViewport}
            {...viewport}
        >
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    latitude={marker.latitude}
                    longitude={marker.longitude}
                    deviceId={marker.deviceId}
                    color={'skyblue'} />
            ))}
        </ReactMapGL>
    );
}
