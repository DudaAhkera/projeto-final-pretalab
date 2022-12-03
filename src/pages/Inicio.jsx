import { Header } from "../components/Header"
import homeImg from '../assets/home.svg'
import { Alien, BracketsCurly, AddressBook } from 'phosphor-react'
import Styles from '../Styles/pages/Inicio.module.css'

function Inicio () {
    return(
        <>
            <Header text="Meu site Pessoal" image={homeImg}/>
            <div className={Styles.homeContainer}>
                <div className={Styles.cardContainer}>
                    <Alien size={150} color="#686AAC" weight="thin" />
                    <h2 className={Styles.cardTitle}>Vida</h2>
                    <p className={Styles.cardText}>Eu conto um pouquinho sobre mim, minha formação, a história da minha migração de carreira, gostos e curiosidades. </p>
                </div>
                <div className={Styles.cardContainer}>
                    <BracketsCurly size={150} color="#686AAC" weight="thin" />
                    <h2 className={Styles.cardTitle}>Código</h2>
                    <p className={Styles.cardText}>Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação. </p>
                </div>
                <div className={Styles.cardContainer}>
                    <AddressBook size={150} color="#686AAC" weight="thin" />
                    <h2 className={Styles.cardTitle}> Contatinho</h2>
                    <p className={Styles.cardText}>Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.</p>
                </div>

            </div>
        </>
    )
}

export default Inicio