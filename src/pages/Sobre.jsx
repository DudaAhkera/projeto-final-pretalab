import { Header } from "../components/Header"
import homeImg from '../assets/about.svg'

function Sobre() {
    return (
        <>
            <Header text="Como tudo comecou..." image={homeImg}/>
            
            <h1>Iniciei os estudos há pouco menos de um ano. Morei durante dois anos e meio na Finlândia. Meu marido foi à trabalho e lá é uma vida muito diferente e por ser um país muito bem estruturado e investir muito bem em educacão e tecnologia, fiz meu primeiro curso de tecnologia, o Machine Learning. Fiquei muito empolgada com tudo que aprendi e lembrei que a tecnologia já havia sido um "amor platônico", por isso resolvi correr atrás do tempo perdido.</h1>
        </>
    )
}

export default Sobre