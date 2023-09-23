import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Olá, eu sou a Nathalia!</b> Descubra minhas histórias ideias aqui
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt='' fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil optio cumque, accusamus architecto quidem quas unde repellat ut 
                        obcaecati, culpa distinctio. 
                    </p>
                    <button className={styles.button}>Leia Mais</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;