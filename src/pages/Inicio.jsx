import { Header } from "../components/Header"
import homeImg from '../assets/home.svg'
import { Alien, BracketsCurly, AddressBook } from 'phosphor-react'
import styles from '../Styles/Pages/Inicio.module.css'

function Inicio () {
    return(
        <>
            <Header text="Meu site Pessoal" image={homeImg}/>
            <div className={styles.homeContainer}>
                <div className={styles.cardContainer}>
                    <Alien size={150} color="#686AAC" weight="thin" />
                    <h2 className={styles.cardTitle}>Vida</h2>
                    <p className={styles.cardText}>Eu conto um pouquinho sobre mim, minha formação, a história da minha migração de carreira, como tudo comecou. </p>
                </div>
                <div className={styles.cardContainer}>
                    <BracketsCurly size={150} color="#686AAC" weight="thin" />
                    <h2 className={styles.cardTitle}>Código</h2>
                    <p className={styles.cardText}>Mostro meu portfólio. O que aprendi até o momento enquanto estudo programação e o que mais curti fazer até agora. </p>
                </div>
                <div className={styles.cardContainer}>
                    <AddressBook size={150} color="#686AAC" weight="thin" />
                    <h2 className={styles.cardTitle}> Contatinho</h2>
                    <p className={styles.cardText}>Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.</p>
                </div>

            </div>
        </>
    )
}

export default Inicio