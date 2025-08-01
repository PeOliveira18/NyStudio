import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AOS from "aos";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser'


function Contato() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [carregando, setCarregando] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)



    function sendEmail(e) {
        e.preventDefault()
        setCarregando(true)

        const templateParams = {
            from_name: nome,
            from_sobrenome: sobrenome,
            email: email,
            message: mensagem
        }

        emailjs.send("service_dxmukgg", "template_shs3ijb", templateParams, "htE14yKxNT8JrJ6Tr")
            .then((res) => {
                console.log("EMAIL ENVIADO", res.status, res.text)
                console.log(`Nome: ${nome}`);
                console.log(`Sobrenome: ${sobrenome}`);
                console.log(`Email: ${email}`);
                console.log(`Mensagem: ${mensagem}`);

                setNome('')
                setSobrenome('')
                setEmail('')
                setMensagem('')
                setCarregando(false)
                setOpenDrawer(true)
            }, (err) => {
                console.log("ERRO", err)
            })
    }

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div>
            <Header />
            <div className="grid md:grid-cols-2 grid-cols-1 mt-36 h-screen px-5 mb-44" data-aos="fade-zoom-on">
                <div className="flex flex-col px-5">
                    <h1 className="text-6xl">Fale conosco</h1>
                    <div className="mt-12">
                        <h1>email@exemplo.com</h1>
                        <h1>(555) 555-5555</h1>
                    </div>
                    <div className="mt-7">
                        <h1>Rua Exemplo 123</h1>
                        <h1>Nova York, NY 12345</h1>
                        <div className="sm:mt-10 mt-5">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:cursor-pointer"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"></path> </g></svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-5 w-full max-w-4xl sm:mt-0 mt-10">
                    <form id="forms" onSubmit={sendEmail}>
                        <div className="flex gap-3 sm:flex-row flex-col">
                            <div className="flex-1">
                                <label htmlFor="">Nome</label>
                                <input type="text" className="forms h-12 w-full" required id="nome" onChange={(e) => setNome(e.target.value)} value={nome} />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="">Sobrenome</label>
                                <input type="text" className="forms h-12 w-full" required id="sobrenome" onChange={(e) => setSobrenome(e.target.value)} value={sobrenome} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">E-mail <span className="font-light">(obrigatorio)</span></label>
                            <input type="email" className="forms h-12 w-full" required id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div>
                            <label htmlFor="">Mensagem</label>
                            <textarea name="" id="mensagem" required onChange={(e) => setMensagem(e.target.value)} value={mensagem} className="forms w-full" rows="5"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="btn-consulta px-12 py-6" disabled={carregando}>
                                {carregando ? (
                                    <svg className="animate-spin h-5 w-5 mr-3 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                                ) : (
                                    "Enviar"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {openDrawer && (
                <div className="fixed inset-0 bg-[#FFF2FF] opacity-90 z-50 flex items-center justify-center" onClick={() => setOpenDrawer(false)} data-aos="fade-zoom-on">
                    <div className="bg-gray-400 max-w-[500px] w-full h-auto rounded-xl shadow-lg text-center px-6 py-56 text-black font-extrabold" onClick={(e) => e.stopPropagation()}>
                        <h1>Email enviado com sucesso</h1>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Contato;