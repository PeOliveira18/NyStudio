import React from "react";
import Header from "../components/header";
import foto from '../images/estudio-de-fotografia.jpg'
import ServicoDetalhado from "../components/servico-detalhado";
import cadeira from '../images/cadeira.png'
import VenhaAgenda from "../components/venha-agenda";
import Footer from '../components/footer'
import AOS from "aos";
import { useEffect } from "react";

function Servicos() {
    useEffect(() => {
        AOS.init({duration: 1000})
        }, [])

    return (  
        <div className="flex flex-col" data-aos="fade-zoom-on">
            <div className="flex flex-col h-screen w-full bg-cover bg-center text-white opacity-80" style={{backgroundImage: `url(${foto})`}}>
                <Header/>
                <div className="flex m-auto lg:max-w-[890px] max-w-[700px] text-center ">
                    <h1 className="lg:text-6xl sm:text-5xl text-4xl lg:px-0 px-7">Receba os devidos cuidados para todas as suas necessidades de saúde mental.</h1>
                </div>
            </div>
            <div className="m-auto text-6xl my-10 text-center">
                <h1>Nossos Serviços</h1>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-12 gap-x-12 md:px-7 px-10">
                <ServicoDetalhado image={cadeira} name={"Terapia"} body={"Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para compartilhar com o mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença."} time={"60 minutos"} price={"R$ 300"}/>
                <ServicoDetalhado image={cadeira} name={"Terapia"} body={"Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para compartilhar com o mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença."} time={"60 minutos"} price={"R$ 300"}/>
                <ServicoDetalhado image={cadeira} name={"Terapia"} body={"Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para compartilhar com o mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença."} time={"60 minutos"} price={"R$ 300"}/>
                <ServicoDetalhado image={cadeira} name={"Terapia"} body={"Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para compartilhar com o mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença."} time={"60 minutos"} price={"R$ 300"}/>
            </div>
            <div className="m-auto mt-10">
                <button className="btn-preto w-72 hover:before:-translate-x-72">AGENDE UMA CONSULTA</button>
            </div>
            <VenhaAgenda text={"Tem alguma pergunta antes de começar?"} showSpan/>
            <Footer/>
        </div>
    );
}

export default Servicos;