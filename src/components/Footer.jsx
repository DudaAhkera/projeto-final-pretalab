import Styles from "../Styles/Components/footer.module.css"
export function Footer () {
    return(
        <footer className={Styles.footerContainer}>
        <p className={Styles.footerText}>Feito com amor pela Duda, durante o projeto guiado no módulo de ReactJs da PretaLab</p>
        </footer>
    )
}