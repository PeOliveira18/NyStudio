import React from "react";

function BlogContent(props) {
    return (  
        <div className="p-10 text-left max-w-4xl m-auto">
            <div className="w-fit flex flex-col gap-10">
                <h1 className="text-[68px]">{props.title}</h1>
                <h1 className="text-[17px]"><span>{props.date}.</span> &#8226; <span>Escrito por Nome Sobrenome</span></h1>
                <img src={props.foto} alt="" className="max-w-[864px] h-auto rounded-md shadow-lg"/>
                <h1 className="texto-equipe">{props.subtitle}</h1>
                <div className="text-[17px] space-y-5">
                    <h1>{props.texto1}</h1>
                    <h1>{props.texto2}</h1>
                    <h1>{props.texto3}</h1>
                </div>
            </div>
        </div>
    );
}

export default BlogContent;