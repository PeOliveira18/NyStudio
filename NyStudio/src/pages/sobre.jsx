import React from "react";
import foto from '../images/foto.jpg'
import Header from "../components/header";
import FotoTexto from "../components/foto-texto";
import foto2 from '../images/image-asset.jpeg'

function Sobre() {
    return (  
        <div className="flex flex-col">
            <div className="h-screen w-full bg-cover bg-center text-white" style={{backgroundImage: `url(${foto})`}}>
                <Header/>
            </div>
            <div className="text-black">
                <FotoTexto title="Transformando a saúde mental" subtitle="Somos um grupo de psicólogos e psiquiatras doutorados e prestamos ótimos serviços de cuidados de saúde mental. Por ser um coletivo de saúde mental, fornecemos terapia, gerenciamento de medicamentos, coaching e muito mais aos nossos membros. Conectamos os nossos clientes a médicos para oferecer os devidos cuidados em um atendimento presencial ou on-line." image={foto2} />
            </div>
        </div>
    );
}

export default Sobre;