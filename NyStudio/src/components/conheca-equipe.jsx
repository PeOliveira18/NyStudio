import React from "react";
import foto from '../images/estudio2.png'

function ConhecaEquipe() {
    return (  
        <div className="m-auto text-center mt-10" data-aos="fade-zoom-on">
            <h1 className="text-6xl">Conheca nossa equipe</h1>
            <div className="grid grid-cols-2 gap-44 mt-10">
                <div>
                    <img src={foto} alt="" className="img-equipe" />
                    <h1 className="texto-equipe">Nathalia Oliveira</h1>
                    </div>
                <div>
                    <img src={foto} alt="" className="img-equipe" />
                    <h1 className="texto-equipe">Yuri Pauletto</h1>
                </div>
            </div>
            <button className="mt-10 btn-preto py-3 px-6">SAIBA MAIS</button>
        </div>
    );
}

export default ConhecaEquipe;