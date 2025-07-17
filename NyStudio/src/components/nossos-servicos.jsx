import React from "react";
import Servicos from "./servicos";


function NossosServicos() {
    return (  
        <div className="bg-[#757263] text-center mt-20" data-aos="fade-zoom-on">
            <h1 className="mt-10 text-6xl">Nossos Servicos</h1>
            <Servicos />
            <button className="mb-7 btn-consulta">SAIBA MAIS</button>
        </div>
    );
}

export default NossosServicos;