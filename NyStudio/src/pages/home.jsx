import Header from "../components/header";
import React, { useEffect } from "react";
import estudio from '../images/estudio2.png'
import AOS from "aos";

function Home() {
    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    return (  
        <div className="flex flex-col mb-10">
            <div className="h-screen w-full bg-cover bg-center text-white" style={{backgroundImage: `url(${estudio})`}}>
                <Header/>
                <div className="w-[713px] text-left p-7 flex flex-col h-screen justify-center-safe mt-10 gap-7">
                    <h1 className="text-3xl">Conheca NyStudio, um estudio de audio visual</h1>
                    <h1 className="text-xl">Receba cuidados médicos de saúde mental acessíveis e personalizados presencialmente ou no aconchego de sua casa.</h1>
                </div>
            </div>
            <div className="m-auto text-center mt-10 max-w-[900px]" data-aos="fade-zoom-on" >
                <h1 className="text-2xl">Nossa abordagem</h1>
                <h1 className="mt-5">Somos um grupo de psicólogos e psiquiatras doutorados e prestamos ótimos serviços de cuidados de saúde mental. Por ser um coletivo de saúde mental, fornecemos terapia, gerenciamento de medicamentos, coaching e muito mais aos nossos membros. Conheça um dos nossos médicos para receber os devidos cuidados em um atendimento presencial ou on-line.</h1>
                <button className="bg-black text-white mt-8">SAIBA MAIS</button>
            </div>
        </div>
    );
}

export default Home;