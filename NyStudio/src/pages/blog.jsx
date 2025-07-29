import React from "react";
import Header from "../components/header";
import FotoTexto from "../components/foto-texto";
import foto2 from '../images/estudio-de-fotografia.jpg'
import CardBlog from "../components/card-blog";
import Footer from "../components/footer";


function Blog() {
    return (  
        <div>
            <Header/>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-48 gap-x-20 text-center items-center mb-44 p-16">
                <div className="flex flex-col gap-36 md:mb-0 mb-36">
                    <CardBlog image={foto2} date={"06/08/2020"} title={"Esta rotina matinal melhora seu humor"} w={'max-w-[587px]'} h={'md:h-[734px]'} link="/PageBlog1"/>
                    <CardBlog image={foto2} date={"06/08/2020"} title={"Esta rotina matinal melhora seu humor"} w={'max-w-[589px]'} h={'md:h-[392px]'} link="/PageBlog2"/>
                </div>
                <div className="flex flex-col gap-36">
                    <CardBlog image={foto2} date={"06/08/2020"} title={"Esta rotina matinal melhora seu humor"} w={'max-w-[589px]'} h={'md:h-[392px]'} link="/PageBlog3"/>
                    <CardBlog image={foto2} date={"06/08/2020"} title={"Esta rotina matinal melhora seu humor"} w={'max-w-[589px]'} h={'md:h-[734px]'} link="/PageBlog4"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Blog;