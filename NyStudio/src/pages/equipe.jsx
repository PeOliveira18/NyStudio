import React from "react";
import Header from "../components/header";
import foto2 from '../images/team.jpg'
import AOS from "aos";
import { useEffect } from "react";
import FotoTexto from "../components/foto-texto";
import VenhaAgenda from "../components/venha-agenda";
import Footer from "../components/footer";
import foto from '../images/estudio.jpg'

function Equipe() {
    useEffect(() => {
                AOS.init({duration: 1000})
            }, [])


    return (  
        <div className="flex flex-col" data-aos="fade-zoom-on">
            <div className="flex flex-col h-screen w-full bg-cover bg-center text-white opacity-80" style={{backgroundImage: `url(${foto2})`}}>
                <Header/>
                <div className="flex m-auto lg:max-w-[850px] max-w-[700px] text-center">
                    <h1 className="lg:text-6xl sm:text-5xl text-4xl lg:px-0 px-7">Por trás de cada conquista, uma equipe extraordinária.</h1>
                </div>
            </div>
            <FotoTexto role={"Fotografa"} title={"Nathalia Oliveira"} subtitle={"Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para compartilhar com o mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença"} media1={"Instagram"} media2={"Email"} w={"max-w-[500px]"} showMedia image={foto}/>
            <FotoTexto role={"Fotografo"} title={"Yuri Pauletto"} subtitle={"Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para compartilhar com o mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença"} media1={"Instagram"} media2={"Email"} w={"max-w-[500px]"} reverse showMedia image={foto}/>
            <VenhaAgenda text={"Venha para NY hoje mesmo"} showBtn/>
            <Footer/>
        </div>
    );
}

export default Equipe;