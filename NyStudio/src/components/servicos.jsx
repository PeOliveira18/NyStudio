import React from "react";
import foto from '../images/cadeira.png'

function Servicos() {
    return (
        <div className="flex flex-wrap justify-center gap-10 my-10 px-4">
            {[1, 2, 3, 4].map((item, index) => (
                <div key={index} className="servico-container max-w-[200px] text-center">
                    <img src={foto} alt="Serviço" className="img-servicos w-full h-auto object-contain" />
                    <h1 className="texto-servicos mt-4 text-lg font-semibold">Terapia</h1>
                </div>
            ))}
        </div>
    );
}

export default Servicos;