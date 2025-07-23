import React from "react";
import foto from '../images/foto.jpg'
import Header from "../components/header";
import FotoTexto from "../components/foto-texto";
import foto2 from '../images/image-asset.jpeg'
import Valores from "../components/valores";
import VenhaAgenda from "../components/venha-agenda";
import Footer from "../components/footer";
import AOS from "aos";
import { useEffect } from "react";

function Sobre() {
    useEffect(() => {
            AOS.init({duration: 1000})
        }, [])

    return (  
        <div className="flex flex-col" data-aos="fade-zoom-on">
            <div className="flex flex-col min-h-screen w-full bg-cover bg-center text-white z-10 relative" style={{backgroundImage: `url(${foto})`}}>
                <Header/>
                <div className="flex m-auto max-w-[800px] text-center px-4 z-10">
                    <h1 className="text-4xl md:text-[68px]">Queremos que você receba os cuidados que merece.</h1>
                </div>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <FotoTexto title="Transformando a saúde mental" subtitle="Somos um grupo de psicólogos e psiquiatras doutorados e prestamos ótimos serviços de cuidados de saúde mental. Por ser um coletivo de saúde mental, fornecemos terapia, gerenciamento de medicamentos, coaching e muito mais aos nossos membros. Conectamos os nossos clientes a médicos para oferecer os devidos cuidados em um atendimento presencial ou on-line." image={foto2} w={"max-w-[500px]"} reverse={"flex-row-reverse"}/>
            <FotoTexto showBtn title="Uma abordagem moderna" subtitle="É muito importante que os nossos clientes recebam sugestões personalizadas dos médicos mais adequados. Portanto, desenvolvemos um sistema próprio para atender às necessidades dos nossos pacientes." w={"max-w-[500px]"} image={foto2}/>
            <h1 className="m-auto text-6xl mt-20">Nossos valores</h1>
            <Valores title={"Terapia de conversa"} subtitle={"On-line ou presencialmente, é voltado para ajudar indivíduos a processarem e explorarem seus pensamentos. Normalmente, as reuniões são semanais ou quinzenais."} hour={"60 minutos"} price={"R$ 300"}/>
            <Valores title={"Terapia de conversa"} subtitle={"On-line ou presencialmente, é voltado para ajudar indivíduos a processarem e explorarem seus pensamentos. Normalmente, as reuniões são semanais ou quinzenais."} hour={"60 minutos"} price={"R$ 300"}/>
            <Valores title={"Terapia de conversa"} subtitle={"On-line ou presencialmente, é voltado para ajudar indivíduos a processarem e explorarem seus pensamentos. Normalmente, as reuniões são semanais ou quinzenais."} hour={"60 minutos"} price={"R$ 300"}/>
            <VenhaAgenda text={"Venha para NY agora mesmo."} showBtn/>
            <Footer/>
        </div>
    );
}

export default Sobre;