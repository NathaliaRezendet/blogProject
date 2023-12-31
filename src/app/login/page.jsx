import React from "react";
import styles from "./loginPage.module.css"

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton}>Faça login com Google</div>
                <div className={styles.socialButton}>Faça login com GitHub</div>
                <div className={styles.socialButton}>Faça login com Facebook</div>
            </div>
        </div>
    )
}

export default LoginPage;