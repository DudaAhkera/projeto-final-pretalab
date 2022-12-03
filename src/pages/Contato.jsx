import { useState } from 'react'
import { Header } from "../components/Header"
import contatoImg from '../assets/contact.svg'
import Styles from '../Styles/Pages/Contato.module.css'

export function Contato () {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleInputName(event) {
        setNome(event.target.value)
    }

    function handleInputEmail(event) {
        setEmail(event.target.value)
    }

    function handleInputMessage(event) {
        setMessage(event.target.value)
    }

    function createMessage(event) {
        event.preventDefault()

        console.log("nome: ", nome)
        console.log("email: ", email)
        console.log("message: ", message)

    setNome('')
    setEmail('')
    setMessage('')
    }
     

    return(
        <>
            <Header text="Vamos conversar?" image={contatoImg}/>
            <div>
                <form onSubmit={createMessage} className={Styles.form}>
                    <input onChange={handleInputName} placeholder="Digite seu nome" className={Styles.formInput} value={nome}/>
                    <input onChange={handleInputEmail} placeholder="Digite seu email" className={Styles.formInput} value={email}/>
                    <textarea onChange={handleInputMessage} placeholder="Digite sua mensagem" className={Styles.formTextArea} value={message}></textarea>
                    <button className={Styles.formButton} type="submit">Enviar Mensagem</button>
                </form>
            </div>
        </>
    )
}

export default Contato