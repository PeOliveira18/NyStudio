import Header from "../components/header";
import React, { useEffect } from "react";
import estudio from '../images/estudio.jpg'
import AOS from "aos";
import FotoTexto from "../components/foto-texto";
import NossosServicos from "../components/nossos-servicos";
import ConhecaEquipe from "../components/conheca-equipe";
import VenhaAgenda from "../components/venha-agenda";
import Footer from "../components/footer";
import foto from '../images/image-asset.jpeg'

function Home() {
    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    return (  
        <div className="flex flex-col">
            <div className="flex flex-col h-screen w-full bg-cover bg-no-repeat bg-center text-white " style={{backgroundImage: `url(${estudio})`}}>
                <Header/>
                <div className="md:max-w-[750px] max-w-[550px] flex flex-col gap-7 my-auto px-4 md:px-7 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl leading-tight">Conheca NyStudio, um estudio de audio visual.</h1>
                    <h1 className="text-lg md:text-[25px]">Receba cuidados médicos de saúde mental acessíveis e personalizados presencialmente ou no aconchego de sua casa.</h1>
                </div>
            </div>
            <div className="m-auto text-center mt-10 md:max-w-[900px] max-w-[500px]  px-4 md:px-10" data-aos="fade-zoom-on" >
                <h1 className="text-4xl md:text-6xl">Nossa abordagem</h1>
                <h1 className="mt-5 md:text-[25px] text-[16px]">Somos um grupo de psicólogos e psiquiatras doutorados e prestamos ótimos serviços de cuidados de saúde mental. Por ser um coletivo de saúde mental, fornecemos terapia, gerenciamento de medicamentos, coaching e muito mais aos nossos membros. Conheça um dos nossos médicos para receber os devidos cuidados em um atendimento presencial ou on-line.</h1>
                <button className="btn-preto mt-10">SAIBA MAIS</button>
            </div>
            <FotoTexto title={"Espaço seguro e confortável"} subtitle={"Todos os atendimentos são realizados em nosso espaço reconfortante de salas totalmente privadas, com chá e água de cortesia e cuidados personalizados."} image={foto} w={"max-w-[600px]"}/>
            <FotoTexto showMap title={"Opções presenciais e remotas"} subtitle={"Nosso escritório encontra-se em Manhattan. Não consegue comparecer pessoalmente? Não se preocupe, oferecemos serviços de terapia on-line."} w={"max-w-[600px]"} reverse={"flex-row-reverse"}/>
            <NossosServicos/>
            <ConhecaEquipe/>
            <VenhaAgenda text={"Venha para NY agora mesmo."} showBtn/>
            <Footer/>
        </div>
    );
}

export default Home;