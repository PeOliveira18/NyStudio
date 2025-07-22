import React from "react";

function Valores(props) {
    return (
        <div className="flex flex-col md:flex-row m-auto justify-center items-center gap-10 mt-14 px-5 text-center md:text-left" data-aos="fade-zoom-on">
            <h1 className="text-3xl md:text-[47px] font-bold">{props.title}</h1>
            <div className="flex flex-col max-w-[500px] gap-3">
                <h1 className="text-sm md:text-base">{props.subtitle}</h1>
                <h1 className="text-sm md:text-base">
                    {props.hour} | {props.price} | <span className="text-footer hover:cursor-pointer">Comece já</span>
                </h1>
            </div>
        </div>
    );
}

export default Valores;