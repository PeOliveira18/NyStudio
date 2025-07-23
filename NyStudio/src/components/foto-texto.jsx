import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState } from "react";

const containerStyle = {
    width: '600px',
    height: '600px',
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
    const reverse = props.reverse

    return  (
        <div className={`flex ${reverse ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row'} flex-col gap-10 px-5 justify-around items-center text-center mt-20`}>
                {showMap ? (
                    <div className="w-full max-w-[500px] aspect-[1/1] rounded-md shadow-lg overflow-hidden">
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
                    </div>
                ) : (
                    <img src={props.image} alt="" className="max-w-[500px] w-full h-auto rounded-md shadow-lg" />
                )}         
            <div className={`${props.w} w-full h-auto flex flex-col lg:text-left text-center gap-4 px-5`} data-aos="fade-zoom-on">
                <h1>{props.role}</h1>
                <h1 className="md:text-6xl text-4xl">{props.title}</h1>
                <h1 className="text-[25px]">{props.subtitle}</h1>
                {showMedia && <div className="flex gap-2"> <a>Instagram</a> <h1> - </h1> <a>Email</a> </div>}
                {showBtn && <div><button className="btn-preto">SAIBA MAIS</button></div>}
            </div>
            
        </div>
    );
}

export default FotoTexto;