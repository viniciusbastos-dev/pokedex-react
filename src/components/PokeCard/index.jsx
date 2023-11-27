import styles from "./PokeCard.module.css"

function PokeCard({}) {
    return (
        <div className={styles.card_container}>
            <img src="" alt="" />
            <h2>Bulbasaur</h2>
            <span>grass</span>
            <span>earth</span>
        </div>
    )
}

export default PokeCard