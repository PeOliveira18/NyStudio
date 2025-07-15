import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px',
}

const center = {
    lat: -23.543401739123848,
    lng: -46.73332994937246,
}

function FotoTexto(props) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAAlHImV6g4jj3MMh32spqFp0RKTifVH-U',
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        map.setCenter(center);
        setMap(map);
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const showMap = props.showMap && isLoaded;


    return  (
        <div className={`flex justify-around items-center mt-20 ${props.reverse}`} data-aos="fade-zoom-on">
                {showMap ? (
                    <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                onLoad={onLoad}
                zoom={17}
                onUnmount={onUnmount}
                options={{
                    mapTypeControl: false, 
                    fullscreenControl: false, 
                    streetViewControl: false,
                    zoomControl: false,
                    gestureHandling:"greedy",
                }}
            >
                <Marker position ={center}/>
                <></>
            </GoogleMap>
                ) : (
                    <img src={props.image} alt="" className="w-[400px] h-[400px]" />
                )}         
            <div className="w-72">
                <h1 className="text-3xl">{props.title}</h1>
                <h1 className="">{props.subtitle}</h1>
            </div>
            
        </div>
    );
}

export default FotoTexto;