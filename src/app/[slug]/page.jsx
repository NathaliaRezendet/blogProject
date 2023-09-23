import React from "react";
import styles from "./singlePage.module.css"
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Daniel Rezende</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>    
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" atl="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.description}>
                    <div className={styles.post}>
                        <h2>Lorem ipsum dolor sit amet consectetur</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, maiores suscipit fugiat blanditiis necessitatibus consequuntur incidunt quae explicabo recusandae atque nam id asperiores dolor modi, odio, dignissimos optio sit. Maiores.
                        </p>

                        <h2>Lorem ipsum dolor sit amet consectetur</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, maiores suscipit fugiat blanditiis necessitatibus consequuntur incidunt quae explicabo recusandae atque nam id asperiores dolor modi, odio, dignissimos optio sit. Maiores.
                        </p>

                        <h2>Lorem ipsum dolor sit amet consectetur</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, maiores suscipit fugiat blanditiis necessitatibus consequuntur incidunt quae explicabo recusandae atque nam id asperiores dolor modi, odio, dignissimos optio sit. Maiores.
                        </p>
                    </div>
                    <div className={styles.s}>
                        <Comments />
                    </div>
                </div>           
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage;