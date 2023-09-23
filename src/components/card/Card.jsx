import React from "react";
import styles from "./card.module.css"
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>22.09.2023 - </span>
                    <span className={styles.category}>CULTURA</span>
                </div>
                <Link href="/">
                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Excepturi eos accusamus asperiores iure dolore architecto voluptatem debitis,
                    quaerat vitae veniam minus quis fugiat et similique hic quas nesciunt autem quasi.
                </p>
                <Link href="/" className={styles.link}>Leia Mais</Link>
            </div>
        </div>
    )
}

export default Card;