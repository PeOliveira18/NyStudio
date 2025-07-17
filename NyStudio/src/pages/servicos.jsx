import React from "react";
import Header from "../components/header";
import foto from '../images/estudio-de-fotografia.jpg'
import ServicoDetalhado from "../components/servico-detalhado";
import cadeira from '../images/cadeira.png'
import VenhaAgenda from "../components/venha-agenda";

function Servicos() {
    return (  
        <div className="flex flex-col">
            <div className="flex flex-col h-screen w-full bg-cover bg-center text-white" style={{backgroundImage: `url(${foto})`}}>
                <Header/>
                <div className="flex m-auto max-w-[710px] text-center">
                    <h1 className="text-5xl">Receba os devidos cuidados para todas as suas necessidades de saúde mental.</h1>
                </div>
            </div>
            <div className="m-auto text-4xl my-10">
                <h1>Nossos Serviços</h1>
            </div>
            <div className="grid grid-cols-2 gap-y-12">
                <ServicoDetalhado image={cadeira} name={"Terapia"} body={"Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para compartilhar com o mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença."} time={"60 minutos"} price={"R$ 300"}/>
                <ServicoDetalhado image={cadeira} name={"Terapia"} body={"Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para compartilhar com o mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença."} time={"60 minutos"} price={"R$ 300"}/>
                <ServicoDetalhado image={cadeira} name={"Terapia"} body={"Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para compartilhar com o mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença."} time={"60 minutos"} price={"R$ 300"}/>
                <ServicoDetalhado image={cadeira} name={"Terapia"} body={"Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para compartilhar com o mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença."} time={"60 minutos"} price={"R$ 300"}/>
            </div>
            <div className="m-auto mt-10">
                <button className="btn-preto w-72">AGENDE UMA CONSULTA</button>
            </div>
            <VenhaAgenda text={"Tem alguma pergunta antes de começar?"} showSpan/>
        </div>
    );
}

export default Servicos;