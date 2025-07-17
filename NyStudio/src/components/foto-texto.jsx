import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState } from "react";

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

    const showMap = props.showMap && isLoaded
    const showBtn = props.showBtn
    const showMedia = props.showMedia

    return  (
        <div className={`flex justify-around items-center mt-20 ${props.reverse}`}>
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
            <div className={`${props.w} flex flex-col text-left gap-4`} data-aos="fade-zoom-on">
                <h1>{props.role}</h1>
                <h1 className="text-6xl">{props.title}</h1>
                <h1 className="text-[25px]">{props.subtitle}</h1>
                {showMedia && <div className="flex gap-2"> <a>Instagram</a> <h1> - </h1> <a>Email</a> </div>}
                {showBtn && <button className="btn-preto">SAIBA MAIS</button>}
            </div>
            
        </div>
    );
}

export default FotoTexto;