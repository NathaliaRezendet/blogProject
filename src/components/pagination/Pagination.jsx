import React from 'react'
import styles from "./pagination.module.css"

const Pagination = () => {
    return (
        <div className={styles.container}>
            <div className={styles.button}>Anterior</div>
            <div className={styles.button}>Próxima</div>
        </div>
    )
}

export default Pagination;