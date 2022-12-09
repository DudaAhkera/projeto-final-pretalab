import { Header } from "../components/Header"
import homeImg from '../assets/about.svg'
import Styles from "../Styles/Pages/Sobre.module.css"

function Sobre() {
    return (
        <>
            <Header text="Como tudo comecou..." image={homeImg} />
            <div className={Styles.squareContainer}>
                <p className={Styles.textCard}>Iniciei os estudos há mais ou menos 1 ano. 
                    Morei dois anos e meio na Finlândia. Meu marido foi à trabalho. 
                    Lá é uma vida muito diferente, é um país muito bem estruturado e que investe muito bem em educacão e tecnologia e por isso 
                    fiz meu primeiro curso de tecnologia, o Machine Learning. Fiquei muito empolgada com tudo que aprendi e relembrei meu "amor platônico", 
                    por isso resolvi correr atrás do tempo perdido.
                </p>
                <img src="./src/assets/Museokeskus.jpg" alt="Foto de uma mouse e um teclado antigo tirada em um museu" className={Styles.imgCard}/>
                
                

            </div>
            
        </>
    )
}

export default Sobre