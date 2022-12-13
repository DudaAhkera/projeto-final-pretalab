import { Header } from "../components/Header"
import homeImg from '../assets/portfolio.svg'
import Styles from "../Styles/Pages/Portfolio.module.css"

function Portfolio () {
    return(
        <>
            <Header text="Meus Projetinhos fofos" image={homeImg}/>
            
            <div className={Styles.homeContainer}>

                <div className={Styles.cardContainer}>

                    <h2>Currículo</h2>
                    <img src="./src/assets/curriculo.png" alt="" className={Styles.cardImg} />
                    <a href="https://github.com/DudaAhkera/resume" className={Styles.a}>Meu currículo </a>

                </div>
                <div className={Styles.cardContainer}>

                    <h2>Jogo do Mário</h2>
                    <img src="./src/assets/game.png" alt="" className={Styles.cardImg} />
                    <a href="https://github.com/DudaAhkera/Aula_jsbasico_startse_jogo_mario/tree/main" className={Styles.a}> Vamos jogar Mário?</a>
                    
                </div>
                <div className={Styles.cardContainer}>

                    <h2>Qual a sua idade? </h2>
                    <img src="./src/assets/tempo.png" alt="" className={Styles.cardImg} />
                    <a href="https://github.com/DudaAhkera/Qual_a_sua_idade_treino_js" className={Styles.a}>Fases da vida</a>
                    
                </div>
            </div>
        
        </>
    )
}

export default Portfolio