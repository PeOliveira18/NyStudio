import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
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


    return (  
        <header className="p-7 flex items-end justify-between">
            <div className="flex items-end gap-10">
                <Link to='/'>
                    <h1 className={`text-4xl ${selecionado === 0 ? '' : ''}`} onClick={() => mudaSelecao(0)}>Ny Studio</h1>
                </Link>
                <nav>
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
                        <li className={selecionado === 4 ? 'nav-ativo' : ''}>
                            <Link to='/Blog' onClick={() => mudaSelecao(4)}>Blog</Link>
                        </li>
                        <li className={selecionado === 5 ? 'nav-ativo' : ''}>
                            <Link to='/Contato' onClick={() => mudaSelecao(5)}>Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="">
                <button className="btn-consulta px-5 hover:opacity-80">AGENDE HORARIO</button>
            </div>
        </header>
    );
}

export default Header;