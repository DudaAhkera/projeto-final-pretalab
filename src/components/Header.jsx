import Styles from "../Styles/Components/header.module.css"

export function Header (props) {
    return (
        <div className={Styles.headerContainer}>
            <h1 className={Styles.headerTitle}>{props.text}</h1>
            <img className={Styles.headerImage}src={props.image} />
        </div>
    )
}