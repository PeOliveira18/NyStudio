import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars2Icon, Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import AOS from "aos";

function Header() {
    useEffect(() => {
            AOS.init({duration: 1000})
        }, [])

    const [open, setOpen] = useState(false)

    const location = useLocation()

    const selecionado = (() => {
        switch (location.pathname) {
            case "/Sobre": return 1;
            case "/Servicos": return 2;
            case "/Equipe": return 3;
            case "/Blog": return 4;
            case "/Contato": return 5;
            default: return 0;
        }
    })()

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <>
            <header className="px-14 py-7 flex justify-between items-center">
                <div className="flex items-end gap-10">
                    <Link to='/'>
                        <h1 className={`text-4xl ${selecionado === 0 ? '' : ''}`} onClick={() => mudaSelecao(0)}>Ny Studio</h1>
                    </Link>
                    <nav className="lg:flex hidden">
                        <ul className="flex gap-10">
                            <li className={selecionado === 1 ? 'nav-ativo' : ''}>
                                <Link to='/Sobre' onClick={() => mudaSelecao(1)}>Sobre</Link>
                            </li>
                            <li className={selecionado === 2 ? 'nav-ativo' : ''}>
                                <Link to='/Servicos' onClick={() => mudaSelecao(2)}>Serviços</Link>
                            </li>
                            <li className={selecionado === 3 ? 'nav-ativo' : ''}>
                                <Link to='/Equipe' onClick={() => mudaSelecao(3)}>Equipe</Link>
                            </li>
                            <li className={selecionado === 4 ? 'nav-ativo border-black' : ''}>
                                <Link to='/Blog' onClick={() => mudaSelecao(4)}>Blog</Link>
                            </li>
                            <li className={selecionado === 5 ? 'nav-ativo border-black' : ''}>
                                <Link to='/Contato' onClick={() => mudaSelecao(5)}>Contato</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="items-end lg:flex hidden">
                    <button className="btn-consulta px-5 py-5 hover:opacity-80">COMECE AGORA</button>
                </div>
                <div className="lg:hidden flex items-end z-50">
                    <button
                        onClick={toggleMenu}
                        className="relative w-24 h-5 flex flex-col justify-between items-center ">
                        <span className={`block h-0.5 w-10 bg-black transform transition duration-300 ease-in-out ${open ? "rotate-47 translate-y-2" : ""}`}></span>
                        <span className={`block h-0.5 w-10 bg-black transform transition duration-300 ease-in-out ${open ? "-rotate-47 -translate-y-2" : ""}`}></span>
                    </button>
                </div>
                
            </header>
            {open && (
                    <div className="fixed left-0 top-0 bg-white h-screen w-full flex flex-col text-black"  data-aos="fade-up">
                        <div className="flex items-center justify-between px-14 py-7">
                            <Link to='/'>
                                <h1 className={`text-4xl ${selecionado === 0 ? '' : ''}`} onClick={() => mudaSelecao(0)}>Ny Studio</h1>
                            </Link>
                            <button
                            onClick={toggleMenu}
                            className="relative w-24 h-5 flex flex-col justify-between items-center "
                        >

                            <span
                                className={`block h-0.5 w-10 bg-black transform transition duration-300 ease-in-out rotate-47 translate-y-2`}
                            ></span>
                            <span
                                className={`block h-0.5 w-10 bg-black transform transition duration-300 ease-in-out -rotate-47 -translate-y-2`}
                            ></span>
                        </button>
                        </div>
                        <div className="flex flex-col items-center gap-10 mt-10">
                            <Link to='/Sobre'>
                                <h1 className="texto-modal">Sobre</h1>
                            </Link>
                            <Link to='/Servicos'>
                                <h1 className="texto-modal">Servicos</h1>
                            </Link>
                            <Link to='/Equipe'>
                                <h1 className="texto-modal">Equipe</h1>
                            </Link>
                            <Link to='/Blog'>
                                <h1 className="texto-modal">Blog</h1>
                            </Link>
                            <Link to='/Contato'>
                                <h1 className="texto-modal">Contato</h1>
                            </Link>
                            <button className="btn-consulta px-12 py-7 hover:opacity-80 mt-16 text-white text-[19px]">COMECE AGORA</button>
                        </div>
                    </div>
                )}
        </>
    );
}

export default Header;