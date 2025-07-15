import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (  
        <header className="p-7 flex items-end justify-between">
            <div className="flex items-end gap-10">
                <h1 className="text-4xl">Ny Studio</h1>
                <nav>
                    <ul className="flex gap-10">
                        <Link to='/Sobre'>
                            <li><a href="">Sobre</a></li>
                        </Link>
                        <li><a href="">Serviços</a></li>
                        <li><a href="">Equipe</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contato</a></li>
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