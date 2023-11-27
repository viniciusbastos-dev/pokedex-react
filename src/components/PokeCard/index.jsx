import styles from "./PokeCard.module.css"

function PokeCard({ type, name, number, types, photo, }) {
    let formattedNumber = number.toString();
    while (formattedNumber.length < 3) formattedNumber = "0" + formattedNumber

    return (
        <li className={`${styles.pokemon} ${type}`} id={`${type}`}>
            <span className={styles.number}>#{formattedNumber}</span>
            <span className={styles.name}>{name}</span>

            <div className={styles.detail}>
                <ol className={styles.types}>
                    {types.map(type => <li className={`${styles.type} ${type}`}>{type}</li>)}
                </ol>
                <img className={styles.image} src={photo} alt={`Imagem de ${name}`} />
            </div>
        </li >
    )
}

export default PokeCard