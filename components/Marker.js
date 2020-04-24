import React, { useState, useEffect } from 'react';
import { Marker } from 'react-map-gl';

export default function MovingMarker(props) {
    // const [location, setLocation] = useState(getLocation());
    // function getLocation() {
    //     return {
    //         latitude: props.latitude + Math.random() * 0.01,
    //         longitude: props.longitude + Math.random() * 0.01,
    //     };
    // }
    // const updateLocation = () => {
    //     setLocation(getLocation())
    //     setTimeout(updateLocation, 5000)
    // }
    // useEffect(() => {
    //     getLocation();
    // }, []);
    return (
        <Marker
            offsetLeft={-10}
            offsetTop={-10}
            latitude={props.latitude}
            longitude={props.longitude}>
            <div style={{
                position: 'relative',
                height: 20,
                width: 20,
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderRadius: 10,
                    height: 20,
                    width: 20,
                    backgroundColor: props.color,
                    opacity: 0.1,
                    transform: 'scale(2)'
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderRadius: 10,
                    height: 20,
                    width: 20,
                    backgroundColor: props.color,
                    border: '2px solid #fff',
                }}></div>
            </div>
        </Marker>
    );
}
