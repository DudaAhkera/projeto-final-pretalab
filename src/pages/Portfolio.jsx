import { Header } from "../components/Header"
import homeImg from '../assets/portfolio.svg'

function Portfolio () {
    return(
        <>
            <Header text="Meus Projetinhos fofos" image={homeImg}/>
            <h1>Aqui estão os projetos criados durante os estudos no PretaLab</h1>
        </>
    )
}

export default Portfolio