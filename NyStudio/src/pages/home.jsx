import Header from "../components/header";
import React, { useEffect } from "react";
import estudio from '../images/estudio2.png'
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
            <div className="flex flex-col h-screen w-full bg-cover bg-center text-white opacity-80" style={{backgroundImage: `url(${estudio})`}}>
                <Header/>
                <div className="max-w-[750px] flex flex-col  gap-7 my-auto p-7">
                    <h1 className="text-6xl leading-16">Conheca NyStudio, um estudio de audio visual.</h1>
                    <h1 className="text-[25px]">Receba cuidados médicos de saúde mental acessíveis e personalizados presencialmente ou no aconchego de sua casa.</h1>
                </div>
            </div>
            <div className="m-auto text-center mt-10 max-w-[900px]" data-aos="fade-zoom-on" >
                <h1 className="text-6xl">Nossa abordagem</h1>
                <h1 className="mt-5 text-[25px]">Somos um grupo de psicólogos e psiquiatras doutorados e prestamos ótimos serviços de cuidados de saúde mental. Por ser um coletivo de saúde mental, fornecemos terapia, gerenciamento de medicamentos, coaching e muito mais aos nossos membros. Conheça um dos nossos médicos para receber os devidos cuidados em um atendimento presencial ou on-line.</h1>
                <button className="btn-preto mt-10">SAIBA MAIS</button>
            </div>
            <FotoTexto title={"Disponibilizamos um espaço seguro e confortável"} subtitle={"Todos os atendimentos são realizados em nosso espaço reconfortante de salas totalmente privadas, com chá e água de cortesia e cuidados personalizados."} image={foto} w={"w-[600px]"}/>
            <FotoTexto showMap title={"Opções presenciais e remotas"} subtitle={"Nosso escritório encontra-se em Manhattan. Não consegue comparecer pessoalmente? Não se preocupe, oferecemos serviços de terapia on-line."} w={"w-[390px]"} reverse={"flex-row-reverse"}/>
            <NossosServicos/>
            <ConhecaEquipe/>
            <VenhaAgenda text={"Venha para NY agora mesmo."} showBtn/>
            <Footer/>
        </div>
    );
}

export default Home;