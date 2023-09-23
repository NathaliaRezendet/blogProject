import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
    return (
        <div className={styles.container}>
           <h2 className={styles.subtitle}>{"Em alta"}</h2>
           <h1 className={styles.title}>Mais Populares</h1>
            <MenuPosts withImage={false} />

           <h2 className={styles.subtitle}>Navegue por Tópico</h2>
           <h1 className={styles.title}>Categorias</h1>           

            <MenuCategories />

           <h2 className={styles.subtitle}>Escolha do editor</h2>
           <h1 className={styles.title}>Escolhidas</h1>
           <MenuPosts withImage={true} />

        </div>
    )
}

export default Menu;