import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

export default function MapRenderer(props) {
    const [response, setResponse] = useState(null);

    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: -22.911610,
        lng: -43.173460
    };

    function directionsCallback(result, status) {
        if (response == null) {
            setResponse(result);
        }
    }

    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_MAPS_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    clickableIcons={false}
                >
                    {
                        (
                            props.destination !== '' &&
                            props.origin !== ''
                        ) && (
                            <DirectionsService
                                /* eslint-disable */
                                options={{ // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                                    destination: props.destination,
                                    origin: props.origin,
                                    travelMode: 'DRIVING'
                                }}
                                /* eslint-enable */
                                callback={(result, status) => { directionsCallback(result, status) }}
                                // optional
                                onLoad={directionsService => {
                                    console.log('DirectionsService onLoad directionsService: ', directionsService)
                                }}
                                // optional
                                onUnmount={directionsService => {
                                    console.log('DirectionsService onUnmount directionsService: ', directionsService)
                                }}
                            />
                        )
                    }

                    {
                        response !== null && (
                            <DirectionsRenderer
                                /* eslint-disable */
                                options={{ // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                                    directions: response
                                }}
                                /* eslint-enable */
                                onLoad={directionsRenderer => {
                                    console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                                }}
                                // optional
                                onUnmount={directionsRenderer => {
                                    console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                                }}
                            />
                        )
                    }
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    );

}
