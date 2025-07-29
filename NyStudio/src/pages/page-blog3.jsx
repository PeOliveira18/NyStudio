import React from "react";
import BlogContent from "../components/blog-content";
import foto from '../images/estudio-de-fotografia.jpg'
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import left from '../images/left.svg'
import right from '../images/right.svg'
import AOS from "aos";
import { useEffect } from "react";

function PageBlog3() {
    useEffect(() => {
                    AOS.init({ duration: 1000 })
                }, [])

    return (  
        <div data-aos="fade-zoom-on"> 
            <Header/>
            <BlogContent title="Esta rotina matinal melhora o seu humor" date="6 de ago" foto={foto} subtitle="Conquiste seu espaço." texto1="Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para compartilhar com o mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença." texto2="Não se preocupe em parecer profissional. Seja você mesmo. Existem mais de 1,5 bilhão de sites, mas a sua história é o diferencial que separa você dos outros. Se você ler as palavras em voz alta e não se sentir identificado, isso significa que o texto ainda precisa ser trabalhado." texto3="Seja claro, tenha confiança e não pense demais. O melhor da sua história é que ela vai continuar evoluindo, e o site pode acompanhar essa evolução. Seu objetivo deve ser fazer com que ele seja ideal para este momento. Depois, ele vai se ajustando sozinho. É sempre assim."/>
            <div className="flex justify-between p-20">
                <Link to='/PageBlog2'>
                    <div className="flex items-center texto-equipe">
                        <img src={left} alt="" className="w-16" />
                        <h1>Esta rotina matinal melhora o seu humor</h1>
                    </div>
                </Link>
                <Link to='/PageBlog4'>
                    <div className="flex items-center texto-equipe">
                        <h1>Esta rotina matinal melhora o seu humor</h1>
                        <img src={right} alt="" className="w-16" />
                    </div>
                </Link>
            </div>
            <Footer/>
        </div>
    );
}

export default PageBlog3;