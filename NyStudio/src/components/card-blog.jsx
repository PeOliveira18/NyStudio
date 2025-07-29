import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CardBlog(props) {
    useEffect(() => {
                AOS.init({duration: 1000})
            }, [])

    return (  
        <div className="flex flex-col m-auto items-center gap-2" data-aos="fade-zoom-on">
            <img src={props.image} alt="" className={`${props.w} ${props.h} w-full h-auto rounded-md shadow-lg`}/>
            <span >{props.date}</span>
            <h1 className="lg:text-5xl text-3xl lg:max-w-[590px] md:max-w-[290px] w-full">{props.title}</h1>
            <Link to={`${props.link}`}>
                <a href="" className="text-[#D4967D] underline underline-offset-4 text-lg">Leia mais</a>  
            </Link>
        </div>
    );
}

export default CardBlog;