import React from "react";
import styles from "./comments.module.css"
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    const status = "authenticated";

    return (
        <h1 className={styles.container}>
            <h1 className={styles.title}>Comentários</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea  placeholder="Escreva um comentário..." className={styles.input} />
                    <button className={styles.button}>Enviar</button>
                </div>
            ) : (
                <Link href="/login">Faça o login para escrever um comentário</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image 
                        src="/p1.jpeg" 
                        alt="" 
                        width={50} 
                        height={50} 
                        className={styles.image} 
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Valeria Rezende</span>
                            <span className={styles.date}>02.07.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste nihil sit recusandae fugit deleniti, facilis sapiente culpa reiciendis. Accusamus nemo voluptas tempora, aperiam unde expedita maiores earum mollitia temporibus.
                    </p>
                </div>
            </div>

            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image 
                        src="/p1.jpeg" 
                        alt="" 
                        width={50} 
                        height={50} 
                        className={styles.image} 
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Valeria Rezende</span>
                            <span className={styles.date}>02.07.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste nihil sit recusandae fugit deleniti, facilis sapiente culpa reiciendis. Accusamus nemo voluptas tempora, aperiam unde expedita maiores earum mollitia temporibus.
                    </p>
                </div>
            </div>

            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image 
                        src="/p1.jpeg" 
                        alt="" 
                        width={50} 
                        height={50} 
                        className={styles.image} 
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Valeria Rezende</span>
                            <span className={styles.date}>02.07.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste nihil sit recusandae fugit deleniti, facilis sapiente culpa reiciendis. Accusamus nemo voluptas tempora, aperiam unde expedita maiores earum mollitia temporibus.
                    </p>
                </div>
            </div>
        </h1>
    )
}

export default Comments;