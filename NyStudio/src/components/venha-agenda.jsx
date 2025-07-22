import React from "react";

function VenhaAgenda(props) {
    const showBtn = props.showBtn
    const showSpan = props.showSpan

    return (  
        <div className="bg-[#757263] text-center mt-20 py-28 px-5 w-full ">
            <h1 className="text-6xl text-white mb-10">{props.text}</h1>
            {showSpan && <span className="text-footer text-4xl text-white">Entre em contato.</span>}
            { showBtn && <button className="mt-10 btn-consulta px-5 sm:px-10 md:px-16">AGENDE UMA CONSULTA</button>}
        </div>
    );
}

export default VenhaAgenda;