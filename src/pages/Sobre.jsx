import { Header } from "../components/Header"
import homeImg from '../assets/about.svg'
import card1Img from '../assets/excel.png'
import card2Img from '../assets/sertifikaatti.jpg'
import card3Img from '../assets/Museokeskus.jpg'
import Styles from "../Styles/Pages/Sobre.module.css"

function Sobre() {
    return (
        <>
            <Header text="Como tudo comecou..." image={homeImg} />
            <div className={Styles.squareContainer}>
                
                <div className={Styles.Card}>
                    <p className={Styles.textCard}>
                        Foi fascinante fazer meu primeiro curso de informática em um projeto governamental. 
                        E posteriormente os cursos de informática que meu pai pagou, a grande felicidade de ter meu primeiro computador, 
                        cada fórmula no excel que aprendi (era um grito de alegria)...
                    </p>
                    <a href=""><img src="./src/assets/excel.png" alt="Símbolo do microsoft excel" className={Styles.imgCard} image={card1Img} /></a>
                </div>
                
                <div className={Styles.Card}>
                    <p className={Styles.textCard}>
                        Sou administradora de formacão, passeei pelo empreendedorismo mas tenho experiência com administrativo, atendimento ao cliente e vendas. 
                        Me dediquei a estudar redes sociais, experiência do usuário, marketing. 
                        Sou certificada gerente de projetos...
                    </p>
                    <a href="https://openbadgefactory.com/v1/assertion/dc3d4c6139c0a23916fb4985eea83b1ce98c6be9.html" ><img src="./src/assets/sertifikaatti.jpg" alt="Certificado do curso de Gerenciamento de Projetos" className={Styles.imgCard} image={card2Img} /></a>
                </div>
                <div className={Styles.Card}>
                    <p className={Styles.textCard}>
                        Retomei os estudos na área de tecnologia há mais de 1 ano.
                        Morei dois anos e meio na Finlândia.
                        Lá é uma vida muito diferente, é um país muito bem estruturado e que investe muito bem em educacão e tecnologia e por isso
                        fiz meu primeiro curso, o Machine Learning. Fiquei muito empolgada com tudo que aprendi e relembrei meu "amor platônico",
                        por isso resolvi correr atrás do tempo perdido!
                    </p>
                    <a href="https://www.vapriikki.fi/en/" ><img src="./src/assets/Museokeskus.jpg" alt="Foto tirada em um museu de um mouse e teclado antigos" className={Styles.imgCard} image={card3Img}/></a>
                </div>

            </div>

        </>
    )
}

export default Sobre