import { Link } from "react-router-dom"
import  Styles  from "../Styles/Components/menu.module.css"

function Menu () {
    return(
        <ul className={Styles.menuContainer}>
            <li className={Styles.menuItem}>
        <Link className={Styles.menuLink} to="/">Inicio</Link>
      </li>
      <li className={Styles.menuItem}>
        <Link className={Styles.menuLink} to="/sobre">Sobre</Link>
      </li>
      <li className={Styles.menuItem}>
        <Link className={Styles.menuLink} to="/portfolio">Portfolio</Link>
      </li>
      <li className={Styles.menuItem}>
        <Link className={Styles.menuLink} to="/contato">Contato</Link>
      </li>
        </ul>
    )
}

export default Menu