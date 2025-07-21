import React from "react";

function Modal() {
    return (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 text-2xl transition-all">
            <button onClick={toggleMenu} className="absolute top-5 right-5 text-xl text-black">✕</button>
            <Link to="/Sobre" onClick={toggleMenu}>Sobre</Link>
            <Link to="/Servicos" onClick={toggleMenu}>Serviços</Link>
            <Link to="/Equipe" onClick={toggleMenu}>Equipe</Link>
            <Link to="/Blog" onClick={toggleMenu}>Blog</Link>
            <Link to="/Contato" onClick={toggleMenu}>Contato</Link>
        </div>
    );
}

export default Modal;