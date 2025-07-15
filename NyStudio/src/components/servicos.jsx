import React from "react";
import foto from '../images/cadeira.png'

function Servicos() {
    return (
        <div className="flex justify-around my-10">
            <div className="servico-container">
                <img src={foto} alt="" className="img-servicos" />
                <h1>Terapia</h1>
            </div>
            <div className="servico-container">
                <img src={foto} alt="" className="img-servicos" />
                <h1>Terapia</h1>
            </div>
            <div className="servico-container">
                <img src={foto} alt="" className="img-servicos" />
                <h1>Terapia</h1>
            </div>
            <div className="servico-container">
                <img src={foto} alt="" className="img-servicos" />
                <h1>Terapia</h1>
            </div>
        </div>
    );
}

export default Servicos;