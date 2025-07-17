import React from "react";

function Valores(props) {
    return (  
        <div className="flex flex-row m-auto justify-center gap-20 mt-14" data-aos="fade-zoom-on">
            <h1 className="text-2xl">{props.title}</h1>
            <div className="flex flex-col max-w-[500px] gap-3">
                <h1>{props.subtitle}</h1>
                <h1>{props.hour} | {props.price} | <span className="underline">Comece ja</span></h1>
            </div>
        </div>
    );
}

export default Valores;