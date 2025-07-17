import React from "react";

function ServicoDetalhado(props) {
    return (  
        <div className="flex flex-col text-center items-center mt-10 gap-3">
            <img src={props.image} alt="" className="bg-amber-100 w-20 h-20"/>
            <h1>{props.name}</h1>
            <h1 className="max-w-[450px] mt-3">{props.body}</h1>
            <h1>{props.time} | {props.price}</h1>
        </div>
    );
}

export default ServicoDetalhado;