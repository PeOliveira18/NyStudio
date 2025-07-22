import React from "react";
import foto from '../images/estudio.jpg'

function ConhecaEquipe() {
    return (  
        <div className="flex flex-col items-center text-center  mt-10 px-5" data-aos="fade-zoom-on">
            <h1 className="md:text-6xl sm:text-4xl text-3xl">Conheça nossa equipe</h1>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-44 mt-10">
                <div>
                    <img src={foto} alt="Foto de Nathalia Oliveira" className="img-equipe" />
                    <h1 className="texto-equipe">Nathalia Oliveira</h1>
                </div>
                <div>
                    <img src={foto} alt="Foto de Yuri Pauletto" className="img-equipe" />
                    <h1 className="texto-equipe">Yuri Pauletto</h1>
                </div>
            </div>
            <button className="mt-10 btn-preto py-3 px-6">Saiba mais</button>
        </div>
    );
}

export default ConhecaEquipe;