import { useState } from 'react'
import { Header } from "../components/Header"
import contatoImg from '../assets/contact.svg'
import Styles from '../Styles/Pages/Contato.module.css'
import { database } from '../services/firebase'
import { ref, push, set } from 'firebase/database'
import { InstagramLogo, GithubLogo, LinkedinLogo } from 'phosphor-react'

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

        //dentro do firebase cria uma tabela de mensagens

        const mensagemListRef = ref(database, 'mensagens')

        //dentro da tabela de mensagens crie uma nova mensagem

        const novaMensagemRef = (mensagemListRef)

        //dizer o que vai em cada mensagem

        set(novaMensagemRef, {
            nome: nome,
            email: email,
            texto: message
        })
      


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
            <div className={Styles.containerFooter}>
                <div className={Styles.listaFooter}>
                    <div className={Styles.icon}>
                        <a href="https://www.instagram.com/mira_ncl/" target="_blank" className={Styles.links}>
                            <InstagramLogo size={32} color="#686AAC" weight="thin" />mira_ncl
                        </a>
                    </div>

                    <div className={Styles.icon}>
                        <a href="https://www.linkedin.com/in/zulenice-pereira-84535536/" target="_blank" className={Styles.links}>
                            <LinkedinLogo size={32} color="#686AAC" weight="thin" />Zulenice Pereira
                        </a>
                    </div>

                    <div className={Styles.icon}>
                        <a href="https://github.com/DudaAhkera" target="_blank" className={Styles.links}>
                            <GithubLogo size={32} color="#686AAC" weight="thin" />Duda Ahkera
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contato